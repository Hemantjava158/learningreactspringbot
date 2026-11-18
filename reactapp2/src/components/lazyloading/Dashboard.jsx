// import { Link, Outlet } from "react-router-dom";

// function Dashboard() {
//     return (
//         <div>
//             <h1>Employee Dashboard</h1>

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
//         </div>
//     );
// }

// export default Dashboard;



// export default function About() {
//     return <h3>Welcome to About Page</h3>;
// }


import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (
        <div>
            <h2>Employee Dashboard</h2>

            <nav>
                <Link to="/dashboard/reports">Reports</Link>
                {" | "}

                <Link to="/dashboard/settings">Settings</Link>
                {" | "}

                <Link to="/dashboard/profile">Profile</Link>
            </nav>

            <hr />

            <Outlet />

        </div>
    );
}

export default Dashboard;