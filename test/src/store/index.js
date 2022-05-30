import { configureStore } from "@reduxjs/toolkit";
import formsSlise from "./redusers/formsSlise";

const store = configureStore({
  reducer: {
    forms: formsSlise.reducer,
  },
});

export default store;
