import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function LoginForm({ toggleLogin }) {
  const [show, setShow] = useState(true);
  return (
    <div className="form login">
      <span className="title">Login</span>

      <form action="#">
        <div className="input-field">
          <input type="text" placeholder="Enter your email" required />
          <i className="uil uil-envelope icon"></i>
        </div>
        <div className="input-field">
          <input type={show ? "password" : "text"} className="password" placeholder="Enter your password" required />
          <i className="uil uil-lock icon"></i>
          <i className="uil uil-eye-slash showHidePw" onClick={() => setShow(!show)}></i>
        </div>

        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="logCheck" />
            <label htmlFor="logCheck" className="text">
              Remember me
            </label>
          </div>

          <a href="#" className="text">
            Forgot password?
          </a>
        </div>

        <div className="input-field button">

          <Link to="/" target="_blank">
            <input type="button" value="Login" />
          </Link>
        </div>
      </form>
      <div className='login-signup'>
        <span className="text">
          "Not a member? "
          <a href="#" className="text login-link" onClick={toggleLogin}>
            Signup Now
          </a>
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
