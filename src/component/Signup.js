import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phonenumber: "",
        password: ""
    });

    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        const name = e.target.id;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup Sucessfully");

                storeTokenInLS(data.token);

                setUser({
                    name: "",
                    email: "",
                    phonenumber: "",
                    password: ""
                });
                navigate("/Signin");

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="login">
                <div className="box">
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" id='name' placeholder='Name' autoComplete='off' value={user.name} required onChange={handleInput} name='name' />

                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' placeholder='Email Address' autoComplete='off' required onChange={handleInput} name='email' value={user.email} />

                        <label htmlFor="phonenumber">Phone Number</label>
                        <input type="text" id="phonenumber" placeholder="Phone Number" required autoComplete='off' onChange={handleInput} name='phonenumber' value={user.phonenumber} />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required autoComplete='off' onChange={handleInput} value={user.password} />

                        <button type="submit">Submit</button>
                    </form>
                    <hr />
                    <p>Already have an account?<Link to='/Signin'>Sign in</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup;
