import { createSlice } from "@reduxjs/toolkit";

export const formsSlise = createSlice({
  name: "forms",
  initialState: {
    invoiseAddress: false,
    bankData: false,
    contact: false,
    id: null,
  },
  reducers: {
    invoiseAddress: (state, action) => {
      state.invoiseAddress = !state.invoiseAddress;
      state.id = action.payload;
    },
    bankData: (state, action) => {
      state.bankData = !state.bankData;
      state.id = action.payload;
    },
    contact: (state, action) => {
      state.contact = !state.contact;
      state.id = action.payload;
    },
  },
});

export const { invoiseAddress, bankData, contact } = formsSlise.actions;
export default formsSlise;
