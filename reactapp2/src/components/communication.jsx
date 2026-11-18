function Child({name, onMessage}){

    return( 
    <>
    <h2>Component Communication</h2>
    <p>Hello {name}</p>
 <button onClick={() => onMessage("Hello Parent")}>
            Send
        </button>
    </>
    );
}


export default function Parent(){
     const handleMessage = (message) => {
        console.log(message);
    };
    return <Child name="Hemant kumar" onMessage={handleMessage}/>
}