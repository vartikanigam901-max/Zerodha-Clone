import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            "http://16.16.203.65:3002/signup",
            {
                name,
                email,
                password,
            }
        );

        
        navigate("/login");

    } catch (error) {

    if (error.response.data.message === "Email already exists") {

        alert("Email already exists. Redirecting to Login...");

        window.location.href = "http://localhost:3001/login";

    } else {

        alert(error.response.data.message);

    }
}
};




    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>

            <h2 className="text-center mb-4">Signup</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>

            </form>

        </div>
    );
}

export default Signup;