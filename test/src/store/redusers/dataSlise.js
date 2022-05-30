import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const formsSlise = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataWithInvoise: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { setDataWithInvoise } = formsSlise.actions;
export default formsSlise;
