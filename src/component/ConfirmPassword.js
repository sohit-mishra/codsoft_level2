import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [update, setUpdate] = useState({
    password: "",
    cppassword: "",
  });

  const [token, setToken] = useState(""); 

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tokenFromUrl = searchParams.get('token');

    console.log("Token from URL:", tokenFromUrl);
    
    setToken(tokenFromUrl); 
  }, [location.search]);

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const name = e.target.id;
    const value = e.target.value;

    setUpdate({
      ...update,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (update.password === update.cppassword) {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/updatepassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, newPassword: update.password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Successfully Changed Password");
                console.log(data);
                setUpdate({
                    password: "",
                    cppassword: ""
                });
                navigate("/Signin");
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Password not match");
    }
}

  return (
    <>
        <div className="forgotpassword">
            <div className="box">
                <h2>Confirm Password</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' autoComplete='off' required onChange={handleInput} name='password' value={update.password} />
                    <label htmlFor="cppassword">Confirm Password</label>
                    <input type="password" id='cppassword' autoComplete='off' required onChange={handleInput} name='cppassword' value={update.cppassword} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
)
}

export default ConfirmPassword;