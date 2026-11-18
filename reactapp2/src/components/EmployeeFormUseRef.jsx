import { useEffect, useRef } from "react";

export default function EmployeeFormUseRef() {
    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    return (
        <form>
            <p>use useRef to access an input and useEffect to focus it when the component first mounts:</p>
            <label htmlFor="name">Employee Name:</label>
            <input
                id="name"
                ref={nameRef}
                type="text"
            />
        </form>
    );
}