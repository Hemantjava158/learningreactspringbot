import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import EmployeeDetails from "./EmployeeDetails";

export default function ReactRouter() {

    return (
        <div>
            <h2>React Router Example</h2>

            <nav>
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/contact">Contact</Link>|
                <Link to="/employees/101">Employee Details</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/employees/:id" element={<EmployeeDetails />}/>
            </Routes>
        </div>
    );
}