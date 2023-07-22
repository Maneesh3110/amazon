import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout';
import { useEffect } from 'react';
function App() {
  useEffect(() =>{

  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='checkout' element={[<Header/>,<Checkout/>]}/>
          <Route path="/" element={[<Header/>,<Home/>]}/>
          <Route path="/login" element={[<Login />]}/>
      
          </Routes>
      </div>
    </Router>
  );
}

export default App;
