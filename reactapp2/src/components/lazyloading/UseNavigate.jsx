
import { useNavigate } from "react-router";

function UseNavigate() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        // Save employee logic goes here.

        // Navigate to employee list.
        navigate("/employees/101");
    }

    return (
        <div>
            <h2>Navigate programmatically using useNavigate</h2>
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Employee Name"
                    required
                />

                <button type="submit">
                    Save Employee
                </button>
            </form>
        </div>
    );
}

export default UseNavigate;
