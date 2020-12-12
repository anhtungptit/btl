import './App.css';
import {useState} from 'react';
import User from './User';
import Employee from './Employee';
import Deposit_account from './Deposit_account';
import Credit_account from './Credit_account';

function App() {

  const [showUser, setShowUser] = useState(false);
  const [showEmployee, setShowEmployee] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showCredit, setShowCredit] = useState(false);
  

  const handle = ( name) => {
    switch (name) {
      case "User": 
        setShowUser(!showUser);
        setShowEmployee(false);
        setShowDeposit(false);
        setShowCredit(false);
        break;
      case "Employee": 
        setShowEmployee(!showEmployee);
        setShowDeposit(false);
        setShowCredit(false);
        setShowUser(false);
        break;
      case "Deposit": 
        setShowDeposit(!showDeposit);
        setShowCredit(false);
        setShowUser(false);
        setShowEmployee(false);
        break;
      case "Credit": 
        setShowCredit(!showCredit);
        setShowUser(false);
        setShowEmployee(false);
        setShowDeposit(false);
        break;

    }
  }


  return (
    <div className="App">
      <h1>Hệ thống quản lý chi nhánh ngân hàng</h1>
      <div className="options">
        <button className="button" onClick={() => handle("User")}>User</button>
        <button className="button" onClick={() => handle("Employee")}>Employee</button>
        <button className="button" onClick={() => handle("Deposit")}>Deposit_account</button>
        <button className="button" onClick={() => handle("Credit")}>Credit_account</button>
      </div>
      
      {showUser && <User/>}
      {showEmployee && <Employee/>}
      {showDeposit && <Deposit_account/>}
      {showCredit && <Credit_account/>}
    </div>
  );
}

export default App;
