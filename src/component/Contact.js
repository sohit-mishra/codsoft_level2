import React, { useState } from 'react';

const Contact = () => {
    const [contact, setContact] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: '',
    });

    const handleInput = (e) => {
        const name = e.target.id;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSumbit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/auth/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Corrected typo here
                },
                body: JSON.stringify(contact),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="contact container">
                <h2>Contact Us</h2>
                <p>Feel free to contact us anytime.</p>
                <form onSubmit={handleSumbit}>
                    <div className="grid">
                        <label htmlFor="firstname">
                            First Name<br />
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                required
                                autoComplete="off"
                                value={contact.firstname}
                                onChange={handleInput}
                            />
                        </label>

                        <label htmlFor="lastname">
                            Last Name<br />
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                required
                                autoComplete="off"
                                value={contact.lastname}
                                onChange={handleInput}
                            />
                        </label>
                        <label htmlFor="email">
                            Email<br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="off"
                                value={contact.email}
                                onChange={handleInput}
                            />
                        </label>
                        <label htmlFor="phonenumber">
                            Phone Number<br />
                            <input
                                type="tel"
                                name="phonenumber"
                                id="phonenumber"
                                required
                                autoComplete="off"
                                value={contact.phonenumber}
                                onChange={handleInput}
                            />
                        </label>
                    </div>

                    <label htmlFor="message">Message</label><br />
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        required
                        autoComplete="off"
                        value={contact.message}
                        onChange={handleInput}
                    ></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default Contact;
