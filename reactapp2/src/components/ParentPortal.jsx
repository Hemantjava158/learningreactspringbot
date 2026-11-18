
import { useState } from "react";
import ChildPortal from "./ChildPortal";

export default function ParentPortal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2>React Portals Example</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      { open && (
        <ChildPortal>
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>React Portal Example</h2>
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
              }}
               >
              <h3>This is a modal rendered using Portal</h3>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </ChildPortal>
      )}
    </div>
  );
}

