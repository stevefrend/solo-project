import axios from 'axios';
import * as types from '../actionTypes';

const initialState = {
  isLoggedIn: false,
  willSignUp: false,
  username: 'Unknown',
  dogList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ALL_DOGS:
      // make a copy of the retrieved array from db, then copy entire state and add
      const newListOfDogs = [...action.payload];
      return {
        ...state,
        dogList: newListOfDogs,
      };

    case types.ADD_DOG:
      // make new copy of dogList and add new dog. update database
      const updatedListOfDogs = [...state.dogList, action.payload];
      axios
        .put('http://localhost:5000/addDogToUser', {
          username: state.username,
          dogList: updatedListOfDogs,
        })
        .catch((err) => console.log(err));
      return {
        ...state,
        dogList: updatedListOfDogs,
      };

    case types.VALIDATE_LOGIN:
      let validatedDogList = [];
      if (action.payload.dogList.dogList !== 0) {
        validatedDogList = [...action.payload.dogList];
      }
      return {
        ...state,
        isLoggedIn: true,
        willSignUp: false,
        username: action.payload.username,
        dogList: validatedDogList,
      };

    case types.SIGNUP:
      return {
        ...state,
        willSignUp: true,
      };

    default:
      return state;
  }
};

export default reducer;
