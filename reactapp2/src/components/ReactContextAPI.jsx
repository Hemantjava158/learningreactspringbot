
import { createContext, useContext } from "react";

  // 1. Create Context
const UserContext = createContext();

// 2. Provide Context
export default function Context() {
  const user = { name: "Hemant kumar", role: "Senior Java Developer" };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

// 3. Consume Context
function Profile() {
  const user = useContext(UserContext);
  return <h2>Welcome {user.name}, your role is {user.role}</h2>;
}

// 4: use in JSX
// function MyContextAPIApp(){
//   return (
//     <div>
//     <h2> React Context API Example</h2>
//       <section>
//           <Context />
//       </section>

// </div>
//   )
// }
// export default MyContextAPIApp;