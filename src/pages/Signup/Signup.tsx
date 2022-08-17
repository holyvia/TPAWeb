import React, { useState } from "react";
import "./Signup.css";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import logoGoogle from '../../assets/logoGoogle.png'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMes, setErrorMes] = useState("");
  const navigate = useNavigate();

  function handleSubmit(){
    if(confPassword != password){
        setErrorMes("Password is not match!");
    }
    else{
        navigate('/')
    }
  }

  return (
    <div className="login">
      <img
        src={logo}
        alt=""
      />
      <div className="title">
        <h1>
            Sign Up
        </h1>
      </div>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <input
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          placeholder="Confirm Password"
          type="password"
        />
        <div className="errorDisplay">
            {errorMes}
        </div>
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>

      <p className="or">or</p>
        <button className="signup-google" type="button">
            <img src={logoGoogle} alt="" />
            Sign Up With Google
        </button>

      <p>
        Already Have Account{` `}
        <span className="login__register" onClick={()=>navigate('/')}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;
