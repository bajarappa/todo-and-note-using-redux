// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [
    // { text: "Office at 9Am", completed: true }, { text: "Gym at 6Pm" }
  ],
};

// Creating async function to call api
export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialState",
  // async (arg, thunkAPI) => {
  //   const result = await axios.get("http://localhost:4100/api/todos");
  //   console.log(result.data);
  //   // dispatch(todoActions.setInitialState(result.data));
  //   thunkAPI.dispatch(todoActions.setInitialState(result.data));
  // }
  () => axios.get("http://localhost:4100/api/todos")
);

export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (payload) => {
    const response = await fetch("http://localhost:4100/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: payload,
        completed: false,
      }),
    });
    return response.json();
  }
);

// Creating reducer using redux toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // setInitialState: (state, action) => {
    //   state.todos = [...action.payload];
    // },
    // this is add action
    add: (state, action) => {
      // payload can be anything string, bool, array, index etc.,
      state.todos.push({ text: action.payload, completed: false });
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i == action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialStateAsync.fulfilled(), (state, action) => {
        state.todos = [...action.payload.data];
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todos.push(action.payload);
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
// Selector
export const todoSelector = (state) => state.todoReducer.todos;

// Reucer using redux

// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, { text: action.text, completed: false }],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i === action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }
