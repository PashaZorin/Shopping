import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

export const formsSlise = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataWithInvoise: (state, action) => {
      //const newState = { ...state.todos, ...action.payload };
      //return newState;
      console.log(state, "state");
      console.log(action.payload, "setDataWithInvoise");
      state.todos.push(action.payload);
    },
    addData: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = { ...state.todos[index], ...action.payload.data };
    },
    //setDataWithContact: (state, action) => {
    //  const index = state.todos.findIndex(
    //    (todo) => todo.id === action.payload.id
    //  );
    //  state.todos[index] = { ...state.todos[index], ...action.payload.data };
    //},
  },
});

export const { setDataWithInvoise, addData } = formsSlise.actions;
export default formsSlise;
