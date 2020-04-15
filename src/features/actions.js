/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from './actionTypes';

export const addAllDogs = (allDogsFromDB) => ({
  type: types.ADD_ALL_DOGS,
  payload: allDogsFromDB,
});

export const addDog = (dogInfo) => ({
  type: types.ADD_DOG,
  payload: dogInfo,
});

export const validateLogin = (loginInfo) => ({
  type: types.VALIDATE_LOGIN,
  payload: loginInfo,
});

export const signup = () => ({
  type: types.SIGNUP,
});

export const login = () => ({
  type: types.LOGIN,
});

export const setCurrentDog = (dogName) => ({
  type: types.SET_CURRENT_DOG,
  payload: dogName, 
});




//* Media Markets examples
// export const updateLocation = data => ({
//   type: types.UPDATE_LOCATION,
//   payload: data,
// });

// export const addCard = id => ({
//   type: types.ADD_CARD,
//   payload: id,
// });

// export const deleteCard = id => (dispatch, getState) => {
//   if (getState().markets.marketList[id].cards > 0) {
//     dispatch({ type: types.DELETE_CARD, payload: id });
//   }
// };

// export const addMarket = event => (dispatch, getState) => {
//   event.preventDefault();
//   const location = getState().markets.newLocation;
//   if (location) {
//     dispatch({
//       type: types.ADD_MARKET,
//       payload: location,
//     });
//   }
// };

// export const syncMarkets = () => (dispatch, getState) => {
//   axios.put('/markets', getState().markets.marketList)
//     .then(({ status }) => {
//       if (status === 200) dispatch({ type: types.SYNC_MARKETS });
//     })
//     .catch(console.error);
// };

// export const loadMarkets = () => (dispatch) => {
//   axios.get('/markets')
//     .then(({ data }) => {
//       dispatch({
//         type: types.LOAD_MARKETS,
//         payload: data,
//       });
//     })
//     .catch(console.error);
// };
