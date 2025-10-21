import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import { Helmet } from "react-helmet";



function Login(){
    const navigate = useNavigate();
    
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginurl, setLoginurl] = useState([]);


  
  async function Logins() {
    const Logindata = await fetch("https://main-projectnode.vercel.app/user/Get")
    const Loginsmain =await Logindata.json()
    setLoginurl(Loginsmain.Data || []);
    
  }
  useEffect(()=>{
    Logins()
  },[])

  const handleLogin = (event) => {
    event.preventDefault();
    const finduser = loginurl.find(
      (User) => User.username === username && User.password === password
    );
    if (finduser) {
      toast.success("User login successfully");
      localStorage.setItem("Ids", finduser._id);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      alert("Invalid username or password");
    }
  };


  return (
    <>
    <Helmet>
        <title>Login Page</title>
    </Helmet>
    <Toaster/>
    <div className="main">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login-In
        </button>
      </form>
      <div className="form-footer">
        <p>
          Don't have an account? <Link to="/Signup">Sign-up</Link>
        </p>
      </div>
    </div>
    </div>
    </>
  )
}
export {Login}