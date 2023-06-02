import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from "./screens/SignupScreen";
import VerifyEmailScreen from "./screens/VerifyEmailScreen";
import VerifyPhone from "./screens/VerifyPhone";

const App = () => {
  return (
    <Router className="min-h-screen">
     
      <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/events" element={<EventScreen/>}/>
          <Route exact path="/signup" element={<SignupScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/verifyemail" element={<VerifyEmailScreen/>}/>
          <Route exact path="/verifyphone" element={<VerifyPhone/>}/>
       </Routes> 
       
    </Router>
  )
}

export default App
