import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login.component';
import * as actions from '../features/actions';
import PetDisplay from './PetDisplay.component';
import SignUp from './SignUp.component';
import axios from 'axios';

const mapStateToProps = (state) => ({
  isLoggedIn: state.pets.isLoggedIn,
  willSignUp: state.pets.willSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  validateLogin: (e) => {
    let username = e.target.childNodes[0].value;
    let password = e.target.childNodes[1].value;
    e.preventDefault();
    axios.post('http://localhost:5000/validateUser', { username: username, password: password})
      .then(res => {
        dispatch(
          actions.validateLogin({
            username: username,
            dogList: res.data.dogList,
          })
        );
      })
      .catch(() => { alert('Username or Password not found') });
    e.target.reset();
  },
  renderSignupPage: () => {
    dispatch(actions.signup())
  },
  createUser: (e) => {
    let username = e.target.childNodes[0].value;
    let password = e.target.childNodes[1].value;
    e.preventDefault();
    axios.post('http://localhost:5000/createUser', { username: username, password: password})
      .then(res => {
        console.log(res)
        dispatch(
          actions.validateLogin({
            username: username,
            dogList: res.data.dogList,
          })
        );
      })
      // .catch(() =>  console.log('hit catch'));
  },
});

class MainContainer extends Component {
  constructor() {
    super();
  }

  render() {
    if(this.props.willSignUp) {
      return <SignUp createUser={this.props.createUser}/>
    }
    if (this.props.isLoggedIn) {
      return (
        <div>
          <PetDisplay />
        </div>
      );
    } else {
      return (
        <div>
          <Login className='login' validateLogin={this.props.validateLogin} />
          <button onClick={this.props.renderSignupPage}>Signup</button>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

/*
  ! TODO LIST
    
    * Add login/user functionality
      * Once this works, add dynamics to main page where you can see username and their dogs (nest dogs in dogs array for each user)
    

*/
