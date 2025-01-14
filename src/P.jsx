/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Checkbox } from '@mui/material';

const MenuItem = ({ icon, label, children }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <li
      className="menu-item"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <Checkbox />
      {icon}
      <span>{label}</span>
      {children && showPopup && (
        <ul className="popup">
          {children.map((child, index) => (
            <MenuItem key={index} {...child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
