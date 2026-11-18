import { useAuth } from "./AuthContext";

function Dashboard() {

    const { user, logout } = useAuth();

    return (
        <div>
            <h1>Employee Dashboard</h1>

            <h3>Welcome, {user.username}</h3>

            <p>Your Role: {user.role}</p>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;