import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCreate = () => {
    const navigate = useNavigate();
    const numQuestions = 5; // You can change this to the desired number of questions

    const [formData, setFormData] = useState({
        questions: Array.from({ length: numQuestions }, (_, i) => ({
            questionText: '',
            options: ['', '', '', ''],
            correctAnswer: '',
        })),
    });

    const handleChange = (e, questionIndex, field) => {
        const { value } = e.target;

        setFormData((prevData) => {
            const updatedQuestions = [...prevData.questions];
            updatedQuestions[questionIndex] = {
                ...updatedQuestions[questionIndex],
                [field]: value,
            };
            return { questions: updatedQuestions };
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/auth/quizcreate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                alert("Create Quiz Sucessfully");
                navigate("/Home");
            }
        } catch (error) {
            console.log(error);
        }

    };

    const renderQuestionInputs = () => {
        return formData.questions.map((question, index) => (
            <div key={index} className="question-container">
                <label htmlFor={`question${index + 1}`}>{`Question ${index + 1}: Enter the Question?`}</label>
                <input
                    type="text"
                    id={`question${index + 1}`}
                    value={question.questionText}
                    onChange={(e) => handleChange(e, index, 'questionText')}
                />

                {[1, 2, 3, 4].map((optionIndex) => (
                    <React.Fragment key={optionIndex}>
                        <label htmlFor={`option${optionIndex}${index + 1}`}>{`Enter Option ${optionIndex}`}</label>
                        <input
                            type="text"
                            id={`option${optionIndex}${index + 1}`}
                            value={question.options[optionIndex - 1]}
                            onChange={(e) => handleChange(e, index, `options[${optionIndex - 1}]`)}
                        />
                    </React.Fragment>
                ))}

                <label htmlFor={`correctAnswer${index + 1}`}>Correct Answer</label>
                <input
                    type="text"
                    id={`correctAnswer${index + 1}`}
                    value={question.correctAnswer}
                    onChange={(e) => handleChange(e, index, 'correctAnswer')}
                />
            </div>
        ));
    };

    return (
        <>
            <div className="quizcreate">
                <h2>Quiz</h2>
                <form onSubmit={handleSubmit}>
                    {renderQuestionInputs()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default QuizCreate;
