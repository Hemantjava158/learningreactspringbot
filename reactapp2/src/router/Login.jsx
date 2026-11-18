import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

function Login() {

    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");

    const { login } = useAuth();
    const navigate = useNavigate();

    function handleLogin(e) {

        e.preventDefault();

        if (!username.trim()) {
            alert("Please enter username");
            return;
        }

        login(username, role);

        navigate("/dashboard", { replace: true });
    }

    return (
        <div>
            <h2>Login Page</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br /><br />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                </select>

                <br /><br />

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Login;