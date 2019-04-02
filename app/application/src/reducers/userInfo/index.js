
/**
 * userInfoReducer
 */

 'use strict';
import *as types from "../../constants/userInfoTypes.js";

export const initialState = {};

export default function( state = initialState, action) {
  switch (action.type) {
    case types.USER_DATA_SAVE:
      console.log('action.data userInfo', action.data);
      return {
        ...state,
        ...action.data
      }
      break;
    default:
      return state;
  }
}
