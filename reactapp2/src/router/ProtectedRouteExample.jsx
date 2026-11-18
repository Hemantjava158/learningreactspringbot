import { Routes, Route, Link } from "react-router";

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Admin from "./Admin";

import ProtectedRoute from "./ProtectedRoute";

export default function ProtectedRouteExample() {

    return (
        <div>
<h2>Protected Router Example</h2>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/login">Login</Link> |
                <Link to="/dashboard">Dashboard</Link> |
                <Link to="/admin">Admin</Link>
            </nav>

            <hr />

            <Routes>

                {/* Public Routes */}

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}

                <Route element={<ProtectedRoute />}>

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    {/* <Route
                        path="/employees"
                        element={<EmployeeList />}
                    /> */}

                    <Route
                        path="/admin"
                        element={<Admin />}
                    />

                </Route>

            </Routes>

        </div>
    );
}

