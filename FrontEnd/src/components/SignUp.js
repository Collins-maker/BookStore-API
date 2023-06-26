import React from 'react';
import './signup.css';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
      <h6>Already registered to our Library? <a href="#">Login</a></h6>
      <h2>Register to our Library</h2>

      <div className="label">
        <label htmlFor="username">
          Username<span className="required">*</span>
        </label>
        <input type="text" />
        <label htmlFor="address">
          Adress<span className="required">*</span>
        </label>
        <input type="text" />
        <label htmlFor="ucontact_number">
          Contact Number<span className="required">*</span>
        </label>
        <input type="text" />
        <label htmlFor="email">
          Email Address<span className="required">*</span>
        </label>
        <input type="text" />
        <label htmlFor="password">
          Password<span className="required">*</span>
        </label>
        <input type="password" />
        <label htmlFor="c_password">
          confirm Password<span className="required">*</span>
        </label>
        <input type="password" />
      </div>
      <p>
        Make sure it's at least  8 characters including a number and a lowercase letter.{' '}
        <a href="#">Learn more.</a>
      </p>
      
      <button onClick={handleSubmit}>Register</button>
      <p>
        By creating an account you agree to the <a href="#">Terms of Service</a>. For more information about Library
        privacy practices, see the <a href="#">Library Privacy Statement</a>. We'll occasionally send you an account
        related emails
      </p>
    </div>
  );
}

export default SignUp;
