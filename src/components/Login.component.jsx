import React from 'react';

const Login = (props) => {

  return (
    <div className='displayContainer'>
      <h1>Welcome to the RawFeeding App</h1>
      <h2>Login</h2>
      <div className="form-wrapper">
        <form className='login-form' onSubmit={props.validateLogin}>
          <input className="loginInput" type='text' placeholder='Username' />
          <input className="loginInput" placeholder='Password' type='password' />
          <button className="loginButton" type='submit'>Enter</button>
        </form>
      </div>
      <p>Or SIGN UP! <br/>We add lots of salt to your password<br/> so your data is IMPOSSIBLE TO HACK!</p>
      <button className='signupButton' onClick={props.renderSignupPage}>
        Sign up
      </button>
      
    </div>
  );
};

export default Login;
