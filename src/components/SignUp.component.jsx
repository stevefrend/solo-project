import React from 'react';



const Signup = (props) => {

  return (
    <div className='displayContainer'>
      <h1>Signup</h1>
      <div className="form-wrapper">
        <form className='login-form' onSubmit={props.createUser}>
          <input className="loginInput" type='text' placeholder='Username' />
          <input className="loginInput" placeholder='Password' type='password' />
          <button className="loginInput" type='submit'>Enter</button>
        </form>
      </div>
      <button onClick={props.renderLoginPage}>Back</button>
    </div>
  );
};

export default Signup;