import { useStytch } from "@stytch/react";
import React, { useState, useCallback } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();

  const resetPasswordByEmail = useCallback(() => {
    stytchClient.passwords.resetByEmailStart({
      email: "nguyenthequang2003@gmail.com",
    });
  }, [stytchClient]);

  const login = () => {
    stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="container">
        <div className="top">
          <i className="fab fa-google"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-apple"></i>
        </div>

        <p className="divider">
          <span>Or</span>
        </p>

        <form>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Enter your E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <div className="remember-me">
            <input type="checkbox" checked="checked"></input>
            <p>Remember Me</p>
          </div>

          <button onClick={login}>Log In</button>
        </form>

        <div className="bottom">
          <p>Forgot your password ?</p>
          <a href="/resetpassword" onClick={resetPasswordByEmail}>Reset Password</a>
        </div>

        <p className="create-acc">
          <a href="/signup">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
