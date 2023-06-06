import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function RegistrationForm({ toggleLogin }) {
  const [show, setShow] = useState(true);
  const [confirmshow, setConfirmshow] = useState(true);
  return (
    <div className="form signup">
      <span className="title">Registration</span>

      <form action="#">
        <div className="input-field">
          <input type="text" placeholder="Enter your name" required />
          <i className="uil uil-user"></i>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter your email" required />
          <i className="uil uil-envelope icon"></i>
        </div>
        <div className="input-field">
          <input type={show ? "password" : "text"} className="password" placeholder="Create a password" required />
          <i className="uil uil-lock icon"></i>
          <i className="uil uil-eye-slash showHidePw" onClick={() => setShow(!show)}></i>
        </div>
        <div className="input-field">
          <input type={confirmshow ? "password" : "text"} className="password" placeholder="Confirm a password" required />
          <i className="uil uil-lock icon"></i>
          <i className="uil uil-eye-slash showHidePw" onClick={() => setConfirmshow(!confirmshow)}></i>
        </div>

        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="termCon" />
            <label htmlFor="termCon" className="text">
              I accepted all terms and conditions
            </label>
          </div>
        </div>

        <div className="input-field button">
          <Link to="/" target="_blank">
            <input type="button" value="Sign Up" />
          </Link>
        </div>
      </form>
      <div className='login-signup'>
        <span className="text">
          Already a member?
          <a href="#" className="text login-link" onClick={toggleLogin}>
            Login Now
          </a>
        </span>
      </div>
    </div>
  );
}

export default RegistrationForm;
