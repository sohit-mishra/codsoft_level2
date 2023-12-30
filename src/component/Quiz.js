import React, { useEffect, useState } from 'react';
import Img from './../Answer.svg'

const Quiz = () => {
    const [totalQuestion, setTotalQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(totalQuestion).fill(''));
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/auth/quizdisplay`);
                const data = await response.json();

                const allData = data.data.data;
                const questionCount = allData.length;

                setQuestions(allData);
                setTotalQuestion(questionCount);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleOptionChange = (index, value) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[index] = value;
        setSelectedAnswers(updatedAnswers);
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < totalQuestion - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // If all questions are answered, calculate the number of correct answers
            const correct = questions.reduce((count, question, index) => {
                if (question.correctAnswer === selectedAnswers[index]) {
                    return count + 1;
                }
                return count;
            }, 0);
            setCorrectAnswers(correct);
            setShowResult(true);

            // Automatically redirect after 2 seconds
            setTimeout(() => {
                // Redirect to home or perform any other action
                // Example: navigate("/");
                console.log(`Total correct answers: ${correct}`);
            }, 2000);
        }
    };

    return (
        <>
            <div className="Quiz">
                {currentQuestionIndex < totalQuestion && !showResult && (
                    <div>
                        <h2>{questions[currentQuestionIndex].title}</h2>
                        <p>{questions[currentQuestionIndex].questionText}</p>
                        
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    value={option}
                                    id={`question${currentQuestionIndex + 1}_option${index + 1}`}
                                    checked={selectedAnswers[currentQuestionIndex] === option}
                                    onChange={() => handleOptionChange(currentQuestionIndex, option)}
                                />
                                <label htmlFor={`question${currentQuestionIndex + 1}_option${index + 1}`}>{option}</label>
                            </div>
                        ))}
                        <button id="next" onClick={handleNextClick}>
                            {currentQuestionIndex === totalQuestion - 1 ? 'Show Result' : 'Next'}
                        </button>
                    </div>
                )}

                {showResult && (
                    <div>
                        <h2>Quiz Result</h2>
                        <p>Total Correct Answers: {correctAnswers}</p>
                        <img src={Img} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Quiz;
