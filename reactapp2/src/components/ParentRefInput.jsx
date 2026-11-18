
import { useRef } from "react";
import ChildRefInput from "./ChildRefInput";

function ParentRefInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleClear = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>React 19 Ref Example</h2>

            <ChildRefInput ref={inputRef} />

            <button onClick={handleFocus}>
                Focus Input
            </button>

            <button onClick={handleClear}>
                Clear Input
            </button>
        </div>
    );
}

export default ParentRefInput;
