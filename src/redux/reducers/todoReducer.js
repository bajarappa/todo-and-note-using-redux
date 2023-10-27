// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ text: "Office at 9Am", completed: true }, { text: "Gym at 6Pm" }],
};

// Creating reducer using redux toolkit

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
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
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
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
