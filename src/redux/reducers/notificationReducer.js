import { createSlice } from "@reduxjs/toolkit";
import { noteActions } from "./noteReducer";
import { todoActions } from "./todoReducer";

const initialState = {
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  //   extraReducers: {
  //     // Todo here is the name of the todoslice and add is the action of todo slice
  //     "todo/add": (state, action) => {
  //       state.message = "Todo as been created";
  //     },
  //     "note/add": (state, action) => {
  //       state.message = "Note as been created";
  //     },
  //   },

  // Using add case
  extraReducers: (builder) => {
    builder.addCase(todoActions.add, (state, action) => {
      state.message = "Todo as been created";
    });
    builder.addCase(noteActions.add, (state, action) => {
      state.message = "Note as been created";
    });
  },

  // extraReducers: {
  //   // map objects:[key]:value
  //   [todoActions.add]: (state, action) => {
  //     state.message = "Todo as been created";
  //   },
  //   [noteActions.add]: (state, action) => {
  //     state.message = "Note as been created";
  //   },
  // },
});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
// Selector
export const notificationSelector = (state) =>
  state.notificationReducer.message;
