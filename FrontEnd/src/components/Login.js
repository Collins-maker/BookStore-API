import React from 'react';
import './login.css';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
      <h6>Have no account in Our Library? <a href="#">Register</a></h6>
      <h2>Login to our Library</h2>

      <div className="label">
       
        
        <label htmlFor="email">
          Email Address<span className="required">*</span>
        </label>
        <input type="text" />
        <label htmlFor="password">
          Password<span className="required">*</span>
        </label>
        <input type="password" />
        
      </div>
      <p>
        Make sure it's at least  8 characters including a number and a lowercase letter.
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

export default Login;
