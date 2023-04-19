import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
function SignIn() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_title">Board.</div>
      </div>
      <div className="signin_container">
        <div className="signin">
          <div className="signin_title">Sign In</div>
          <div className="signin_text">Sign in to your account</div>
          <div className="signin_methods">
            <div className="signin_methods_button">
              <img
                src="https://img.icons8.com/color/16/null/google-logo.png"
                alt="google"
              />
              Sign in with Google
            </div>
            <div className="signin_methods_button">
              <img
                src="https://img.icons8.com/ios-glyphs/16/999999/mac-os.png"
                alt="apple"
              />
              Sign in with Apple
            </div>
          </div>
          <div className="singin_form">
            <div className="signin_form_title">Email address</div>
            <input type="text" className="input_email" />
            <div className="signin_form_title">Password</div>
            <input type="text" className="input_password" />
            <div className="forgot_password">Forgot password?</div>
            <Link className="signin_button" to="/dasboard">
              Sign In
            </Link>
          </div>
          <div className="register">
            Don't have an account? <a href="/">Register</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
