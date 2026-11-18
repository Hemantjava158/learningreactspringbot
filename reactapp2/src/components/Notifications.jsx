// import { useEffect, useState } from "react";

// export default function Notifications({ notificationService }) {
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         const unsubscribe = notificationService.subscribe(
//             newMessage => {
//                 setMessage(newMessage);
//             }
//         );

//         return () => {
//             unsubscribe();
//         };
//     }, [notificationService]);

//     return <p>Latest notification: {message}</p>;
// }