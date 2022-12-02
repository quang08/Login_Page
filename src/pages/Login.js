import React from 'react'

function Login({text, switchTheme}) {
  return (
    <div>
    <div className="login">
    <h1>Login</h1>
    <div className="container">
      <div className="top">
        <i class='fab fa-google'></i>
        <i class='fab fa-facebook-square'></i>
        <i class='fab fa-linkedin'></i>
        <i class='fab fa-twitter-square'></i>
        <i class='fab fa-apple'></i>
      </div>

      <p className="divider"><span>Or</span></p>

      <form>
        <label>E-mail</label>
        <input type='email' placeholder="Enter your E-mail"></input>

        <label>Password</label>
        <input type='password' placeholder="Enter your password"></input>

        <div className="remember-me">
          <input type='checkbox' checked='checked'></input>
          <p>Remember Me</p>
        </div>

        <button>Log In</button>
      </form>

      <div className="bottom">
        <p>Forgot your password ?</p>
        <a href='/resetpassword'>Reset Password</a>
      </div>

      <p className="create-acc"><a href='/signup'>Create Account</a></p>
    </div>

    <div className="theme-toggle">
      <h2>{text}</h2>
      <i onClick={switchTheme} class='fas fa-toggle-on'></i>
    </div>
  </div>
    </div>
  )
}

export default Login
