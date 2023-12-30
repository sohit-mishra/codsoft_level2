const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
        unique: true,
        default:true
    },
    data: [{
        title: {
            type: String,
            required: true
        },
        questionText: {
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        correctAnswer: {
            type: String,
            required: true
        }
    }]
});

const Quiz = mongoose.model("Quiz", questionSchema);

module.exports = Quiz;