import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {useState} from "react"
import {  BrowserRouter as Route, Router, Routes } from "react-router-dom";
import {Link} from "react-router-dom"
function App(){
  return (
    <Router>
      <div>
          <ul>
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
            <Link to={"/signup"}>
            <li>SignUp</li>
            </Link>
          </ul>
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App