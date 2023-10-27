// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    { text: "jdfnjsfduherierbierbier", createdOn: new Date() },
    { text: "dfnkjsdfneiwba", createdOn: new Date() },
  ],
};

// Reducer function using redux toolkit
const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({ text: action.payload, createdOn: new Date() });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
// Selector
export const noteSelector = (state) => state.noteReducer.notes;

// Reducer function using redux

// export function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, { text: action.text, createdOn: new Date() }],
//       };
//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1);
//       return {
//         ...state,
//         notes: [...state.notes],
//       };
//     default:
//       return state;
//   }
// }
