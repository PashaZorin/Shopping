import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

export const formsSlise = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataWithInvoise: (state, payload) => {
      state.todos.push(payload);
      console.log(payload, "setDataWithInvoise");
    },
    setDataWithBank: (state, payload) => {
      //state.push(action.payload);
      //const newState = state.map((e) => e.id === payload.id);

      console.log(state.todos, "state.todos");
      console.log(payload, "setDataWithBank");
    },
  },
});

export const { setDataWithInvoise, setDataWithBank } = formsSlise.actions;
export default formsSlise;
