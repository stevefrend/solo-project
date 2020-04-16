import axios from 'axios';
import * as types from '../actionTypes';

const initialState = {
  isLoggedIn: false,
  showLoginAlert: false,
  willSignUp: false,
  username: '',
  dogList: [], 
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
        .put('http://localhost:5000/updateDogList', {
          username: state.username,
          dogList: updatedListOfDogs,
        })
        .catch((err) => console.log(err));
      return {
        ...state,
        dogList: updatedListOfDogs,
      };
    
    case types.EDIT_DOG:
      // find dog with matching old name, and replace obj in new array. send to db
      let ind;
      state.dogList.find((dogObj, index) => {
        if (dogObj.name === action.oldName) ind = index;
      });
      let newDogList = [...state.dogList];
      newDogList[ind] = action.newInfo;
      axios
        .put('http://localhost:5000/updateDogList', {
          username: state.username,
          dogList: newDogList,
        })
        .catch((err) => console.log(err));
      return {
        ...state,
        dogList: newDogList,
      };
    
    case types.DELETE_DOG:
      // find dog with matching old name, and replace obj in new array. send to db
      let newInd;
      state.dogList.find((dogObj, index) => {
        if (dogObj.name === action.name) newInd = index;
      });
      let deleteDogList = [...state.dogList];
      deleteDogList.splice(newInd, 1);
      axios
        .put('http://localhost:5000/updateDogList', {
          username: state.username,
          dogList: deleteDogList,
        })
        .catch((err) => console.log(err));
      return {
        ...state,
        dogList: deleteDogList,
      };

    case types.VALIDATE_LOGIN:
      let validatedDogList = [];
      if (action.payload.dogList.dogList !== 0) {
        validatedDogList = [...action.payload.dogList];
      }
      return {
        ...state,
        isLoggedIn: true,
        showLoginAlert: !state.showLoginAlert,
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
    
    case types.TOGGLE_LOGIN_ALERT:
      return {
        ...state,
        showLoginAlert: !state.showLoginAlert,
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
