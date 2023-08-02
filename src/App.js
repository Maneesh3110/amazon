import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

 const promise = loadStripe("pk_test_51NXOBWSBjM0ehCZ7nNjejJiuw83By5N4rPcIqMX3DmDyS1GWMxBd5CVFEbuUogB1G31j65LQgABGb2LpYoYmtg5n00tnItNorM");

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() =>{
      auth.onAuthStateChanged(authUser =>{
        console.log('THE USER IS',authUser);

        if(authUser){
            dispatch({
              type: 'SET_USER',
              user:authUser
            })
        }
        else{
            dispatch({
              user: 'SET_USER',
              user:null
            })
        }
      })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='checkout' element={[<Header/>,<Checkout/>]}/>
          <Route path="/" element={[<Header/>,<Home/>]}/>
          <Route path="/login" element={[<Login />]}/>
          <Route path="/payment" element={[<Header/>,<Payment/>,<Elements stripe={promise}/>]}/>
      
          </Routes>
      </div>
    </Router>
  );
}

export default App;