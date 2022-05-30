import React from "react";

function Login(props) {
  return (
    <div className={props.login ? "login" : "hidden"}>
      <form className="login__form">
        <h2 className="login__heading">Sign in to bigTO-DO</h2>
        <input className="login__input" placeholder="email address"></input>
        <input
          className="login__input"
          type="password"
          placeholder="password"
        ></input>
        <button className="btn btn--primary btn--login" type="button">
          Login
        </button>
        <h2 className="login__heading">New here?</h2>
        <button type="button" className="btn btn--secondary btn--login">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
