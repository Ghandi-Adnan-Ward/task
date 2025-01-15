/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";

const MenuItem = ({ icon, label, children,onChildChecked  }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChildChecked) {
      onChildChecked(!isChecked);
    }
  };

  const handleChildChecked = (childChecked) => {
    if (childChecked) {
      setIsChecked(true);
      if (onChildChecked) {
        onChildChecked(true);
      }      
    }
    else{
      setIsChecked(false)
      if (onChildChecked) {
        onChildChecked(false);
      }
    }
  };
  return (
    <li className='menu-item' >
  ````<input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />     
        {icon}
        <span>{label}</span>
        {children  && (
          <ul
            className="popup">
            {children.map((child, index) => (
              <MenuItem key={index} {...child} 
              onChildChecked={handleChildChecked}
              />
            ))}
          </ul>
        )}
    </li>
  );
};

export default MenuItem;
