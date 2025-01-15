// /* eslint-disable react/no-children-prop */
// import HistoryIcon from '@mui/icons-material/History';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import RequestPageIcon from '@mui/icons-material/RequestPage';
// import MenuItem from './Pop';
// import { Box, Grid2, Modal } from '@mui/material';
// import { useState } from 'react';

// const App = () => {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => setOpen(false);
//   const handleOpen = () => setOpen(true);
//   const menuData = [
//     {
//       icon:<HistoryIcon/>,
//       label: "Wallet History",
//       children: [
//         { label: "Transaction 1" },
//         { label: "Transaction 2",
//         children: [
//           { label: "Transaction 1" },
//           { label: "Transaction 2" },
//           { label: "Transaction 3" },
//         ],
//          },
//         { label: "Transaction 3" },
//       ],
//     },
//     {
//       icon:<AccountBalanceIcon/>,
//       label: "Users Wallets",
//       children: [
//         { label: "User 1",
//         children: [
//           { label: "User 1" },
//           { label: "User 2" },
//           { label: "User 3" },
//         ],
//          },
//         { label: "User 2" },
//         { label: "User 3" },
//       ],
//     },
//     {
//       icon:<RequestPageIcon/>,
//       label: "Users Withdraw Requests",
//       children: [
//         { label: "Request A" },
//         { label: "Request B" },
//         {
//           label: "Request C",
//           children: [
//             { label: "Sub Request 1" },
//             { label: "Sub Request 2" },
//             { label: "Sub Request 3" ,
//               children:[
//                 { label: "Request A" },
//                 { label: "Request B" },
//               ]
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="menu-container">
//       <div className="menu">
//         <div className="menu-title"                       onClick={handleOpen}
// >Finances</div>
          
            
//             <div className="navigation__wrapper d-flex align-items-center justify-content-between">
//               <div className="menu1">
              

//                 <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//                   <Box sx={style}>
//                     <Grid2 >
//                       <Grid2 >
//                       <ul className="popup">
//               {menuData.map((item, index) => (
//                 <MenuItem key={index} label={item.label} children={item.children} icon={item.icon} />
//               ))}
//             </ul>      
//                       </Grid2>
//                     </Grid2>
// </Box>                     
//                 </Modal>
//               </div>
//             </div>   
//       </div>
//     </div>
//   );
// };

// export default App;
// const style = {
  
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90vw',
//   maxWidth: 800,
//   bgcolor: 'background.paper',
//   borderRadius: '5px',
//   boxShadow: 24,
//   overflow: 'auto',
//   scrollbarWidth: 'none',
//   msOverflowStyle: 'none',
//   padding: '16px',
//   maxHeight: '90vh',
  
// };
 
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MenuItem from './Pop';
import './App.css'
import { useState } from 'react';
import {Box, Grid2, Modal } from "@mui/material";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleMouseEnter = () => {
    setShowPopup(true);
    console.log(showPopup)
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };


  const menuData = [
    {
      icon: <HistoryIcon />,
      label: 'Wallet History',
      children: [
        { label: 'Transaction 1' },
        {
          label: 'Transaction 2',
          children: [
            { label: 'Transaction 1' },
            { label: 'Transaction 2' },
            { label: 'Transaction 3' },
          ],
        },
        { label: 'Transaction 3' },
      ],
    },
    {
      icon: <AccountBalanceIcon />,
      label: 'Users Wallets',
      children: [
        {
          label: 'User 1',
          children: [
            { label: 'User 1' },
            { label: 'User 2' },
            { label: 'User 3' },
          ],
        },
        { label: 'User 2' },
        { label: 'User 3' },
      ],
    },
    {
      icon: <RequestPageIcon />,
      label: 'Users Withdraw Requests',
      children: [
        { label: 'Request A' },
        { label: 'Request B' },
        {
          label: 'Request C',
          children: [
            { label: 'Sub Request 1' },
            { label: 'Sub Request 2' },
            {
              label: 'Sub Request 3',
              children: [
                { label: 'Request A' },
                { label: 'Request B' },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-title" onMouseEnter={handleMouseEnter} >
          Finances
        </div>
        <Modal open={showPopup} >
            <Box style={style}>
              <Grid2>
                
              <ul className='popup'
              onMouseLeave={handleMouseLeave}
         >
             {menuData.map((item, index) => (
               <MenuItem key={index}  {...item}/>
             ))}
           </ul>
              </Grid2>
            </Box>
            </Modal>
      </div>
    </div>
  );
};

export default App;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 1800,
  borderRadius: '5px',
  overflow: 'auto',
  padding: '16px',
  maxHeight: 1800,
  height:'100%',

};

 
