import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Signin = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        const name = e.target.id;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    };
    const handleSumbit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            if (response.ok) {
                alert("Login Sucessfully");
                storeTokenInLS(data.token);
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                alert("Invalid Creditnals")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="login">
                <div className="box">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSumbit}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' autoComplete='off' required onChange={handleInput} name='email' value={user.email} />

                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' required autoComplete='off' onChange={handleInput} value={user.password} />

                        <button>Sumbit</button>
                    </form>
                    <hr />
                    <p>Don't have an account? <Link to="/Signup">Sign up</Link></p>
                    <Link to="/ForgotPassword">Frogot Password</Link>
                </div>


            </div>
        </>
    )
}


export default Signin;