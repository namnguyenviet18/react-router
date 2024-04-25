
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login({ onLogin }) {
    const [creds, setCreds] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    function handleLogin() {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:8080/api/auth/login',
                    {
                        headers: {
                            'Accept': 'application /json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify(creds),
                    }
                );

                if (response.ok) {
                    const json = await response.json();
                    console.log(json.msg);
                    if (json.status) {
                        onLogin && onLogin({ username: creds.username });
                        navigate('/stats');
                    } else {
                        setError("Invalid usename or password");
                    }

                } else {
                    setError("Invalid usename or password");
                }
                console.log(response);
            } catch (error) {
                console.error("Login error:", error);
                setError("Login failed!");
            }
        }
        fetchData();
    }


    return (
        <div style={{ padding: 10 }}> <br />
            <span>Username:</span><br />
            <input type="text" onChange={(e) => setCreds({
                ...creds, username:
                    e.target.value
            })} /><br />
            <span>Password:</span><br />
            <input type="password" onChange={(e) => setCreds({
                ...creds, password:
                    e.target.value
            })} /><br /><br />
            <button onClick={handleLogin}>Login</button>
            <p style={{ color: 'red' }}>{error}</p>
        </div>

    );
}

export default Login;
