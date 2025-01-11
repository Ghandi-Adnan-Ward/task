/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
const MenuItem = ({ icon,label, children }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <li
      className="menu-item"
      onMouseEnter={() => setShowPopup(true)}
      // onMouseLeave={() => setShowPopup(false)}
      // onMouseUp={()=>setShowPopup(false)}
    >
      {icon}
      <span>{label}</span>
      {children && showPopup && (
        <ul className="popup">
          {children.map((child, index) => (
            <MenuItem key={index} label={child.label} children={child.children} icon={child.icon} />
          ))}
        </ul>
      )}
    </li>
  );
};
export default MenuItem;
