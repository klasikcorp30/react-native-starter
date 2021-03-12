/**
 * @param  {"auth"} {name
 * @param  {defaultState} initialState
 * @param  {{login:(state} reducers
 */
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  userDate: null,
  currentUser: null,
  isLoggedIn: false,
  token: "",
};

let authSlice = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserFormData: (state, action) => {
      state.userData = action.payload;
    },
    logoutUser: () => {
      console.log("logging out auth");
      return defaultState;
    },
  },
});

/**
 *
 * @param {{auth: defaultState}} state
 */
export const getCurrentUser = ({ auth: state }) => state.currentUser;
/**
 * @param  {{auth: defaultState}}}
 */
export const getToken = ({ auth: state }) => state.token;
/**
 * @param  {{auth: defaultState}}}
 */
export const getUserFormData = ({ auth: state }) => state.userData;

export const {
  login,
  setCurrentUser,
  setToken,
  setUserFormData,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;
