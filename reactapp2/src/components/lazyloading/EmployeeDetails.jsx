
import { useParams } from "react-router";

function EmployeeDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Dynamic routing using URL parameters</h2>
            <h2>Employee Details</h2>

            <p>Employee ID: {id}</p>
        </div>
    );
}

export default EmployeeDetails;
