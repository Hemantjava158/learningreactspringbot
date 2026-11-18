// export default function Welcome() {
//     return <h1>Welcome to ReactJs</h1>
// }


// const Welcome=()=>{
//     return <h1>Welcome, React Component using Arrow Function</h1>
// }


const Welcome=(props)=>{
    return <h1>Welcome, {props.name}React Component using Arrow Function</h1>
}

export default Welcome;