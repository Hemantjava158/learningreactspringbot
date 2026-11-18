
import { useState, useMemo } from "react";

export default function UseMemoFilterExample() {
  const [query, setQuery] = useState("");
  const users = ["Avi", "John", "Sara", "Amit", "Kiran", "Hemant", "Maya"];

  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) =>
      user.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
        <h2>useMemo Hook Filter Example</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>    
  );
}
      