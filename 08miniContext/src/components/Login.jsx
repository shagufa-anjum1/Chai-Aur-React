import React, { useState, useContext } from "react";
import UserContext from '../context/UserContext'; // Ensure the import path is correct

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password }); // Sets the user context with the username and password
    }

    return ( // Corrected the typo here
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)} // Updates the username state
                placeholder="Username"
            />
            {" "}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Updates the password state
                placeholder="Password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
