import { createPortal } from "react-dom";

export default function ChildPortal({children}) {
    
 const portalRoot = document.getElementById("portal-root");
  return createPortal(children, portalRoot);

}