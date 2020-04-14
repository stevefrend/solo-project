import React from 'react';

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <div className="form-wrapper">
        <form className='login-form'>
          <input className="loginInput" type='text' placeholder='Username' />
          <input className="loginInput" type='text' placeholder='Password' type='password' />
          <button className="loginInput" type='submit'>Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
