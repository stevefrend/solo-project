import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login.component';
import * as actions from '../features/actions';
import PetDisplay from './PetDisplay.component';
import axios from 'axios';

const mapStateToProps = (state) => ({
  isLoggedIn: state.pets.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  validateLogin: (e) => {
    let username = e.target.childNodes[0].value;
    let password = e.target.childNodes[1].value;
    console.log(username, password)
    e.preventDefault();
    axios.post('http://localhost:5000/validateUser', { username: e.target.childNodes[0].value, password: e.target.childNodes[1].value})
      .then(res => {
        console.log(res.data)
        dispatch(
          actions.validateLogin({
            username: username, // this is coming out as undefined. could store above
            password: password,
            dogList: res.data,
          })
        );
      })
      .catch(err => console.log(err))
  },
});

class MainContainer extends Component {
  constructor() {
    super();
  }


  render() {
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
