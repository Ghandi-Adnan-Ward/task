/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [visibleMenu, setVisibleMenu] = useState(null);

//   const handleMenuHover = (menuName) => {
//     setVisibleMenu(menuName);
//   };

//   const handleMouseLeave = () => {
//     setVisibleMenu(null);
//   };

//   return (
//     <div className="menu">
//       <div className="menu-button">Finances</div>
//       <div
//         className="menu-content"
//         onMouseLeave={handleMouseLeave}
//       >
//         <ul>
//           <li
//             onMouseEnter={() => handleMenuHover("walletHistory")}
//           >
//             Wallet History
//             {visibleMenu === "walletHistory" && (
//               <ul className="nested">
//                 <li>Subitem 1</li>
//                 <li>Subitem 2</li>
//                 <li>Subitem 3</li>
//               </ul>
//             )}
//           </li>
//           <li
//             onMouseEnter={() => handleMenuHover("usersWallets")}
//           >
//             Users Wallets
//             {visibleMenu === "usersWallets" && (
//               <ul className="nested">
//                 <li>Subitem A</li>
//                 <li>Subitem B</li>
//                 <li>Subitem C</li>
//               </ul>
//             )}
//           </li>
//           <li
//             onMouseEnter={() => handleMenuHover("withdrawRequests")}
//           >
//             Users Withdraw Requests
//             {visibleMenu === "withdrawRequests" && (
//               <ul className="nested">
//                 <li>Subitem X</li>
//                 <li>Subitem Y</li>
//                 <li>Subitem Z</li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";
// import "./App.css";

// const MenuItem = ({ label, children }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <li
//       className="menu-item"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <span>{label}</span>
//       {children && isHovered && (
//         <ul className="nested-menu">
//           {children.map((child, index) => (
//             <MenuItem key={index} label={child.label} children={child.children} />
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

// const App = () => {
//   const menuData = [
//     {
//       label: "Wallet History",
//       children: [
//         { label: "Transaction 1" },
//         { label: "Transaction 2" },
//         { label: "Transaction 3" },
//       ],
//     },
//     {
//       label: "Users Wallets",
//       children: [
//         { label: "User 1" },
//         { label: "User 2" },
//         { label: "User 3" },
//       ],
//     },
//     {
//       label: "Users Withdraw Requests",
//       children: [
//         { label: "Request A" },
//         { label: "Request B" },
//         {
//           label: "Request C",
//           children: [
//             { label: "Sub Request 1" },
//             { label: "Sub Request 2" },
//             { label: "Sub Request 3" },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="menu-container">
//       <div className="menu">
//         <ul>
//           {menuData.map((item, index) => (
//             <MenuItem key={index} label={item.label} children={item.children} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import "./App.css";
import HistoryIcon from '@mui/icons-material/History';
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

const App = () => {
  const menuData = [
    {
      icon:<HistoryIcon/>,
      label: "Wallet History",
      children: [
        { label: "Transaction 1" },
        { label: "Transaction 2" },
        { label: "Transaction 3" },
      ],
    },
    {
      label: "Users Wallets",
      children: [
        { label: "User 1" },
        { label: "User 2" },
        { label: "User 3" },
      ],
    },
    {
      label: "Users Withdraw Requests",
      children: [
        { label: "Request A" },
        { label: "Request B" },
        {
          label: "Request C",
          children: [
            { label: "Sub Request 1" },
            { label: "Sub Request 2" },
            { label: "Sub Request 3" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-title">Finances</div>
        <ul className="popup">
          {menuData.map((item, index) => (
            <MenuItem key={index} label={item.label} children={item.children} icon={item.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
