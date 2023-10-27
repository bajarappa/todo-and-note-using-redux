import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import NoteForm from "./components/NoteForm/NoteForm";
import NavBar from "./components/NavBar/NavBar";
import NoteList from "./components/NoteList/NoteList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "todo",
      element: (
        <div>
          <NavBar />
          <h1>To Dos</h1>
          <TodoForm />
          <TodoList />
        </div>
      ),
    },
    {
      path: "notes",
      element: (
        <div>
          <NavBar />
          <h1>Notes</h1>
          <NoteForm />
          <NoteList />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
