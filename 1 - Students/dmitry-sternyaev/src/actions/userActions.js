import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../constants/actionTypes.js";

export const logInSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const logInError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logOutError = (error) => ({
  type: LOGOUT_ERROR,
  error,
});