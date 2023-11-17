import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUserInfo: (state, action) => {
      //   console.log("action?.payload ", action?.payload);
      state.userData = action.payload;
    },
    addUserData: (state, action) => {
      state.userData = action.payload;
    },
    // logOut: (state) => {
    //   state.userData = {};
    // },
  },
});
export const { loadUserInfo, addUserData } = authSlice.actions;

export default authSlice.reducer;
