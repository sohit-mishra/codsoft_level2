import React from 'react'
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth.js';

const NavBar = () => {
    const navigate = useNavigate();
    const Signin = () => navigate('/Signin');
    const { isLoggedIn } = useAuth();
    const Signup = () => {
        navigate('/Signup');
    }

    const Logout = () => {
        navigate('/Logout');
    }
    const NavbarOpen = () => {

    }
    return (<>
        <div className="Navbar container">
            <div className="left"><h2>CodSoft Quiz</h2></div>
            <div className="right">
                <ul>
                    <li><Link to="Home">Home</Link></li>
                    <li><Link to="Contact">Contact</Link></li>
                    <li><Link to="About">About</Link></li>
                </ul>
                <div className="btn">
                    {isLoggedIn ?
                        <><button onClick={Logout}>Logout</button></>
                        : <><button id='signin' onClick={Signin}>Sign In</button>
                            <button onClick={Signup}>Get Started</button></>}
                    <IoMenu style={{ fontSize: "22px" }} onClick={NavbarOpen} />
                </div>
                <div className="MobileNav">
                    <ul>
                        <li><Link to="Home">Home</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                        <li><Link to="About">About</Link></li>
                        {isLoggedIn ? <li><Link to="Logout">Logout</Link></li> :
                        <><li><Link to="Signin">Signin</Link></li>
                         <li><Link to="Signup">Get Started</Link></li></>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>)
}


export default NavBar;