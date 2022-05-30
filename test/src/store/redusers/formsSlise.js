import { createSlice } from "@reduxjs/toolkit";

export const formsSlise = createSlice({
  name: "forms",
  initialState: {
    invoiseAddress: false,
    bankData: false,
    contact: false,
  },
  reducers: {
    invoiseAddress: (state) => {
      state.invoiseAddress = !state.invoiseAddress;
      console.log("aaaa");
    },
    bankData: (state) => {
      state.bankData = !state.bankData;
    },
    contact: (state) => {
      state.contact = !state.contact;
    },
  },
});

export const { invoiseAddress, bankData, contact } = formsSlise.actions;
export default formsSlise;
