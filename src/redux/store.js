// import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// const result = combineReducers({
//   todoReducer,
//   noteReducer,
// });
// export const store = redux.createStore(result);

export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificationReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});
