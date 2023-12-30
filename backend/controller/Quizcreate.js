const Quiz = require('../models/quizmodal');

const QuizCreate = async (req, res) => {
    try {
        const quizQuestions = req.body;

        const quizCreated = await Quiz.insertMany(quizQuestions);

        res.status(201).json({
            message: 'Successfully Created Quiz', 
            data: quizCreated,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = QuizCreate;
