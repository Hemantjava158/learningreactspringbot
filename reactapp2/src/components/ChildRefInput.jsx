
function ChildRefInput({ ref, ...props }) {
    return (
        <input
            {...props}
            ref={ref}
            type="text"
            placeholder="Enter your name"
        />
    );
}

export default ChildRefInput;
