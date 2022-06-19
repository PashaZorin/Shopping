import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "todos/fetchData",
  async function (action) {
    const respons = await fetch(`${action}`);
    const data = await respons.json();
    return data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    cards: [],
    pending: false,
    _URL: `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`,
    disabledBtn: false,
  },
  reducers: {
    getTodos(state, action) {
      state.todos.push(action.payload);
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => ({ ...state, pending: true }),
    [fetchData.fulfilled]: (state, action) => {
      return {
        ...state,
        pending: false,
        cards: [...state.cards, ...action.payload.users],
        _URL: action.payload.links.next_url,
        disabledBtn: action.payload.total_pages === action.payload.page && true,
      };
    },
    [fetchData.rejected]: (state, action) => console.log("rejected"),
  },
});
export const { getTodos } = todoSlice.actions;
export default todoSlice.reducer;
