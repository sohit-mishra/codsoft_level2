import React from 'react'
import HomeImage from './../Question.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth.js';


const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const CreateQuiz = () =>{
        {isLoggedIn ? navigate('/QuizCreate') : navigate('/Signin')}
    } 
   
    const StartQuiz = () => {
        {isLoggedIn ? navigate('/Quiz') : navigate('/Signin')}
    }
    return (
        <>
            <div className="home">
                <div className="left">
                    <h2>Certainly! Let's go with General Knowledge Challenge.</h2>
                    <p>Welcome to the exciting quiz challenge! Get ready to test your knowledge on a variety of topics. In this quiz, we'll cover a range of subjects, from science and history to pop culture and general trivia. Each question has been carefully crafted to challenge and entertain you. So, buckle up and let the quiz begin! Good luck, and may your knowledge shine brightly!</p>
                    <button onClick={CreateQuiz}>Create Quiz</button>
                    <button onClick={StartQuiz}>Start Quiz</button>
                </div>
                <div className="right">
                    <img src={HomeImage} alt="Question" />
                </div>
            </div>
        </>
    )
}


export default Home;