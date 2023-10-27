import { useDispatch, useSelector } from "react-redux";
import "./ToDoList.css";
import { toggleTodo } from "../../redux/actions/todoActions";

function ToDoList() {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  const dispatch = useDispatch();
  // This is same as above
  // const todos = store.getState().todos;
  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.i}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(toggleTodo(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
