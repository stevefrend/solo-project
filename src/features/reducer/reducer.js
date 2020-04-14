
import axios from 'axios';
import * as types from '../actionTypes';

const initialState = {
  isLoggedIn: false,
  username: 'Albert',
  dogList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ALL_DOGS:
      // make a copy of the retrieved array from db, then copy entire state and add
      const newListOfDogs = [...action.payload]
      return {
        ...state,
        dogList: newListOfDogs,
      };
    
    case types.ADD_DOG:
      // make new copy of dogList and add new dog. update database
      const updatedListOfDogs = [...state.dogList, action.payload];
      axios.put('http://localhost:5000/addDogToUser', { username: state.username, dogList: updatedListOfDogs})
        .catch(err => console.log(err))
      return {
        ...state,
        dogList: updatedListOfDogs,
      };

    default:
      return state;
  }
};

export default reducer;


