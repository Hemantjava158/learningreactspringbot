import { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds(previous => previous + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
            console.log("Timer stopped");
        };
    }, []);

    return <h2>Seconds: {seconds}</h2>;
}