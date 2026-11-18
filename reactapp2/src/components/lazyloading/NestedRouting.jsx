// import { Routes, Route } from "react-router-dom";
// import { Link, Outlet } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Reports from "./Reports";
// import Profile from "./Profile";
// import Settings from "./Settings";
// import Home from "./Home";

// function NestedRouting() {
//     return (
//         // <BrowserRouter>

// <div>
//     <h2>Nested Routing</h2>
//             <h2>Employee Dashboard</h2>

//             <nav>
//                 <Link to="reports">Reports</Link>
//                 {" | "}

//                 <Link to="settings">Settings</Link>
//                 {" | "}

//                 <Link to="profile">Profile</Link>
//             </nav>

//             <hr />

//             {/* Child route components render here */}
//             <Outlet />
        

        
            
//             <Routes>

//                 {/* Parent Route */}
//                 <Route path="/" element={<Home />} />

//                 {/* Nested Routes */}
//                 <Route path="/dashboard" element={<Dashboard />}>

//                     <Route index element={<h2>Welcome to Employee Dashboard</h2>} />

//                     <Route path="reports" element={<Reports />} />

//                     <Route path="profile" element={<Profile />} />

//                     <Route path="settings" element={<Settings />} />

//                 </Route>

//             </Routes>
//             </div>
        
//     );
// }

// export default NestedRouting;




import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import Reports from "./Reports";
import Profile from "./Profile";
import Settings from "./Settings";
import Home from "./Home";

function NestedRouting() {
    return (
        <div>
            <h2>Nested Routing Example</h2>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/dashboard" element={<Dashboard />}>

                    <Route index element={<h3>Welcome to Employee Dashboard</h3>} />

                    <Route path="reports" element={<Reports />} />

                    <Route path="profile" element={<Profile />} />

                    <Route path="settings" element={<Settings />} />

                </Route>

                {/* Redirect unknown routes to Dashboard */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />

            </Routes>
        </div>
    );
}

export default NestedRouting;