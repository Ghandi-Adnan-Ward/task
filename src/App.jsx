/* eslint-disable react/no-children-prop */
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MenuItem from './Pop';
const App = () => {
  const menuData = [
    {
      icon:<HistoryIcon/>,
      label: "Wallet History",
      children: [
        { label: "Transaction 1" },
        { label: "Transaction 2",
        children: [
          { label: "Transaction 1" },
          { label: "Transaction 2" },
          { label: "Transaction 3" },
        ],
         },
        { label: "Transaction 3" },
      ],
    },
    {
      icon:<AccountBalanceIcon/>,
      label: "Users Wallets",
      children: [
        { label: "User 1",
        children: [
          { label: "User 1" },
          { label: "User 2" },
          { label: "User 3" },
        ],
         },
        { label: "User 2" },
        { label: "User 3" },
      ],
    },
    {
      icon:<RequestPageIcon/>,
      label: "Users Withdraw Requests",
      children: [
        { label: "Request A" },
        { label: "Request B" },
        {
          label: "Request C",
          children: [
            { label: "Sub Request 1" },
            { label: "Sub Request 2" },
            { label: "Sub Request 3" ,
              children:[
                { label: "Request A" },
                { label: "Request B" },
              ]
            },
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
