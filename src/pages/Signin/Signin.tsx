import React, { useState } from "react";
import "./Signin.css";
import logo from '../../assets/logo.png'
import logoGoogle from '../../assets/logoGoogle.png'
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMes, setErrorMes] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login">
      <img
        src={logo}
        alt=""
      />
      <div className="title">
        <h1>
            Sign In
        </h1>
      </div>
      <form>
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
        <div className="errorDisplay">
            {errorMes}
        </div>
        <button type="button" onClick={()=>navigate('/homepage')}>
          Sign In
        </button>
      </form>
      <p className="or">or</p>
        <button className="signin-google" type="button">
            <img src={logoGoogle} alt="" />
            Sign In With Google
        </button>

      <p>
        Not a member?{` `}
        <span className="login__register" onClick={()=>navigate('/signup')}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Signin;
