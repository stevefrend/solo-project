import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Login from './Login.component';
// import * as actions from '../features/actions';
// import PetDisplay from './PetDisplay.component';
// import SignUp from './SignUp.component';
// import axios from 'axios';
// import { Alert } from 'react-bootstrap';

// const mapStateToProps = (state) => ({
//   // isLoggedIn: state.pets.isLoggedIn,
//   // willSignUp: state.pets.willSignUp,
//   // username: state.pets.username,
// });

// const mapDispatchToProps = (dispatch) => ({
  // validateLogin: async (e) => {
    
  //   try {
  //     console.log('hit validate')
  //     let username = e.target.childNodes[0].value;
  //     let password = e.target.childNodes[1].value;
  //     e.preventDefault();
  //     const response = await fetch('http://localhost:5000/validateUser', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username: username, password: password }),
  //     });
  //     const parsed = await response.json();
  //     dispatch(
  //       actions.validateLogin({
  //         username: parsed.username,
  //         dogList: parsed.dogList,
  //       })
  //     );
  //   } catch (error) {
  //     alert('Password/Username did not match');
  //   }

  //   // e.target.reset();
  // },
  // renderLoginPage: () => {
  //   dispatch(actions.login());
  // },
  // renderSignupPage: () => {
  //   dispatch(actions.signup());
  // },
  // createUser: (e) => {
  //   let username = e.target.childNodes[0].value;
  //   let password = e.target.childNodes[1].value;
  //   e.preventDefault();
  //   axios
  //     .post('http://localhost:5000/createUser', { username: username, password: password })
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(
  //         actions.validateLogin({
  //           username: username,
  //           dogList: res.data.dogList,
  //         })
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // },

// });

class MainContainer extends Component {
  
  componentDidUpdate() {
    console.log('Greeting - shouldComponentUpdate lifecycle');

    return;
  }

  render() {
    console.log('mainContainer rendered')
    return <div>Hello</div>
    // if (this.props.willSignUp) {
    //   console.log('1')
    //   return (
    //     <SignUp createUser={this.props.createUser} renderLoginPage={this.props.renderLoginPage} />
    //   );
    // }
    // else if (this.props.isLoggedIn) {
    //   console.log('2')
    //   return (
    //     <div>
    //       <Alert variant={'success'}>`Successful login! Welcome {this.props.username}`</Alert>
    //       <PetDisplay />
    //     </div>
    //   );
    // } else if (!this.props.isLoggedIn){
    //   console.log('3')
    //   return (
    //     <div>
    //       <Login
    //         className='login'
    //         validateLogin={this.props.validateLogin}
    //         renderSignupPage={this.props.renderSignupPage}
    //       />
    //     </div>
    //   );
    // }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
