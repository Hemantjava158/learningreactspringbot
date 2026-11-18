export default function EventHandle(){
    const handleClick=()=>{
        alert("Employee clicked!");
    };

    return (
<button onClick={handleClick} >Click Me</button>

    );
}