import React, { Suspense, lazy } from "react";
import ErrorBoundary from "../ErrorBoundary";

//Lazy Imports

const Home=React.lazy(()=>import("./Home"));
const About=React.lazy(()=>import("./About"));
const Contact=React.lazy(()=>import("./Contact"));


export default function LazyLoading(){

    const [currentPage, setCurrentPage]=React.useState("home");

    const renderPage=()=>{

        switch(currentPage){

            case "home":
                return <Home/>;

            case "about":
                return <About/>;

            case "contact":
                return <Contact/>;    

            default:
                return <Home/>;

        }

    };


return (

    <>
    <h2>React Suspense & Lazy Loading Example</h2>
<nav>
<button onClick={()=>setCurrentPage("home")} >Home</button>
<button onClick={()=>setCurrentPage("about")} >About</button>
<button  onClick={()=>setCurrentPage("contact")} >Contact</button>
</nav>

<ErrorBoundary>
<Suspense fallback={<div><h2>Loading page ...</h2></div>}>

{renderPage()}
</Suspense>

</ErrorBoundary>


    </>
);

}