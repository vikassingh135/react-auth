import React, { useState } from "react";
import "./Login.css";

const Login = ()=> {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {

    e.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(async (res) => {
        const response = await res.json();
        localStorage.setItem("userCredentials", JSON.stringify(response));
        console.log(response);
        window.location.href='./profile'
      })
      .then(console.log);
  };

  return (
    <div id="login-form">
      <form>
        <div id="heading">
          <div>Welcome back!👋</div>
          <h2>Sign in to your account</h2>
        </div>
        <div id="input-fields">
          <div id="input">
            <label>Your email</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div id="input">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div id="submit-btn">
          <button id="submit" onClick={onSubmit}>
            Continue
          </button>
          <div id="forgot-pwd">Forgot your password ?</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
