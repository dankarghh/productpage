import React from "react";

function Login(props) {
  return (
    <div
      className={
        props.login ? "login animate__animated animate__fadeIn" : "hidden"
      }
    >
      {props.signUp ? (
        <form className="login__form">
          <h2 className="login__heading--no">
            Oh no! BigTO-DO is currently in closed beta phase.
          </h2>
          <h3>Please check back soon </h3>
        </form>
      ) : (
        <form className="login__form">
          <h2 className="login__heading">Sign in to bigTO-DO</h2>
          <input className="login__input" placeholder="email address"></input>
          <input
            className="login__input"
            type="password"
            placeholder="password"
          ></input>
          <button
            onClick={e => props.setInvalidLogin(true)}
            className="btn btn--primary btn--login"
            type="button"
          >
            Login
          </button>
          {props.invalidLogin && (
            <p className="login__error">Invalid username and/or password</p>
          )}
          <h2 className="login__heading">New here?</h2>
          <button
            type="button"
            onClick={e => props.setSignUp(true)}
            className="btn btn--secondary btn--login"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
