import { useStytch } from "@stytch/react";
import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();

  //LOGIN
  const signUp = () => {
    //1. Check password strength
    stytchClient.passwords
      .strengthCheck({ email, password })
      .then((res) => {
        console.log("Success: ", res);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
    //2. Create user
    stytchClient.passwords
      .create({
        email,
        password,
        session_duration_minutes: 60, //session duration
      })

  };

  return (
    <div className="login">
      <h1>Sign Up</h1>
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

          <button onClick={signUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
