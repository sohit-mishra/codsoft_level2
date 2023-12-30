import AboutImg from './../About.svg';
import { FaLinkedin, FaInstagram } from "react-icons/fa";


const About = () => {
    return (
        <>
            <div className="about container">
                <h2>About Us</h2>
                <div className="box">
                    <div className="left">
                        <p>Welcome to our quiz haven, where curiosity meets knowledge! We're passionate about creating a space that celebrates learning and fun. Our team is dedicated to crafting engaging quizzes that cater to diverse interests and spark your intellectual curiosity. Join us on this exciting journey of exploration and discovery. Let's challenge ourselves, have a blast, and make learning an adventure!</p>
                        <a href="https://www.instagram.com/codsoft_official/"><FaInstagram style={{ fontSize: "30px", marginRight: "30px" }} /></a>
                        <a href="https://www.linkedin.com/company/codsoft/"><FaLinkedin style={{ fontSize: "30px" }} /></a>
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default About;