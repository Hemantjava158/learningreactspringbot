
import { useReducer } from "react";
import { EmployeeContext } from "./EmployeeContext";

const initialEmployees = [
    {
        id: 101,
        name: "Hemant Kumar",
        department: "IT",
        salary: 105000
    },
    {
        id: 102,
        name: "Maya Kumari",
        department: "Garment",
        salary: 15000
    },
    {
        id: 103,
        name: "Yogendra Kumar",
        department: "Education",
        salary: 50000
    }
];

function employeeReducer(state, action) {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return [...state, action.payload];

        case "DELETE_EMPLOYEE":
            return state.filter(
                employee => employee.id !== action.payload
            );

        case "INCREASE_SALARY":
            return state.map(employee =>
                employee.id === action.payload
                    ? {
                          ...employee,
                          salary: employee.salary + 5000
                      }
                    : employee
            );

        default:
            return state;
    }
}

export function EmployeeProvider({ children }) {
    const [employees, dispatch] = useReducer(
        employeeReducer,
        initialEmployees
    );

    const contextValue = { employees, dispatch };

    return (
        <EmployeeContext.Provider value={contextValue}>
            {children}
        </EmployeeContext.Provider>
    );
}
