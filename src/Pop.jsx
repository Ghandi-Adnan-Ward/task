 
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { Checkbox } from "@mui/material";
// const MenuItem = ({ icon,label, children }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   useEffect(() => {
//     // إضافة أو إزالة كلاس "popup-active" إلى <body>
//     if (showPopup) {
//       document.body.classList.add("popup-active");
//     } else {
//       document.body.classList.remove("popup-active");
//     }

//     // تنظيف التأثير عند إلغاء المكون
//     return () => {
//       document.body.classList.remove("popup-active");
//     };
//   }, [showPopup]);
//   return (
//     <li
//       className="menu-item"
//       onMouseEnter={() => setShowPopup(true)}
//       onMouseLeave={() => setShowPopup(false)}
//     >
//       <Checkbox />
//       {icon}
//       <span>{label}</span>
//       {children && showPopup&& (
//         <ul className='popup'>
//         {children.map((child, index) => (
//             <MenuItem key={index} label={child.label} children={child.children} icon={child.icon} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };
// export default MenuItem;
import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import "./App.css";

const MenuItem = ({ icon, label, children,showPopup }) => {

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("popup-active");
    } 
else{
  document.body.classList.remove("popup-active");

}
    return () => {
      document.body.classList.remove("popup-active");
    };
  }, [showPopup]);

  
  return (
    <li
      className="menu-item"

    >
      <Checkbox />
      {icon}
      <span>{label}</span>
      {children  && (
        <ul
          className="popup"
 
        >

          {children.map((child, index) => (
            <MenuItem key={index} {...child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
