
import { EmployeeProvider } from "./EmployeeReducer";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

export default function ReducerContext() {
    return (
        <EmployeeProvider>
            <h2>Combining useReducer with Context API in React</h2>
            <h2>Employee Management</h2>

            <EmployeeForm />

            <hr />

            <EmployeeList />
        </EmployeeProvider>
    );
}
