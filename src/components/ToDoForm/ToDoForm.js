import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";
import { addTodoAsync, todoActions } from "../../redux/reducers/todoReducer";
import {
  notificationSelector,
  resetNotification,
} from "../../redux/reducers/notificationReducer";

function ToDoForm({ onCreateTodo }) {
  const [todoText, setTodoText] = useState("");
  const message = useSelector(notificationSelector);
  const dispatch = useDispatch();
  if (message) {
    setInterval(() => {
      dispatch(resetNotification());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateTodo(todoText);
    // dispatch(todoActions.add(todoText));
    dispatch(addTodoAsync(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
      {message && (
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
