import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
  });

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

    try {
      const response = await fetch(`http://localhost:5000/api/auth/forgotpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();
      if (response.ok) {
        alert("Check Your Email");
        console.log(data.link);
        window.location.href = data.link;
        setUser({
          email: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="forgotpassword">
        <div className="box">
          <h2>Forgot Password</h2>
          <p>Please enter an email and send the link to the email. Please check now.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' autoComplete='off' required onChange={handleInput} name='email' value={user.email} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;
