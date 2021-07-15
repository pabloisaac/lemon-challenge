import { actionTypes } from './actions';
import { createContext } from 'react';
export const AppContext = createContext({});

export const initialState = {
  listCases: [],
  slug: undefined,
  isLogged: false,
  userInfo: undefined
}

export const reducer = (state = {}, action) => {
  let response
  switch (action.type) {

    case actionTypes.UPDATE_CASES:
      response = Object.assign({}, state, {
        listCases: action.data,
      });
      return response

    case actionTypes.SET_SLUG:
      response = Object.assign({}, state, {
        slug: action.data,
      });
      return response

    case actionTypes.SET_LOGIN:
      response = Object.assign({}, state, {
        isLogged: action.data,
      });
      return response

    case actionTypes.SET_USER_INFO:
      response = Object.assign({}, state, {
        userInfo: action.data,
      });
      return response


  }
};