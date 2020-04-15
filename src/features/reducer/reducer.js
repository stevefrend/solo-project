import axios from 'axios';
import * as types from '../actionTypes';

const initialState = {
  isLoggedIn: false,
  willSignUp: false,
  username: 'Steve',
  dogList: [], //{name: 'Summer', birthday: '2019-05-15', sex: 'female', breed: 'Aussie'}
  currentDog: 'No pet has been selected',
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
      console.log(action.payload)
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
    
    case types.LOGIN:
      return {
        ...state,
        willSignUp: false,
      };
    
    case types.SET_CURRENT_DOG:
      const currentDog = state.dogList.find(dog => dog.name === action.payload)
      return {
        ...state,
        currentDog: currentDog,
      };

    default:
      return state;
  }
};

export default reducer;
