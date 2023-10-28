import { useDispatch, useSelector } from "react-redux";
import "./ToDoList.css";
import { toggleTodo } from "../../redux/actions/todoActions";
import { todoActions, todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const todos = useSelector(todoSelector);
  console.log(todos);
  const dispatch = useDispatch();
  // This is same as above
  // const todos = store.getState().todos;

  useEffect(() => {
    // fetch("http://localhost:4100/api/todos")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4100/api/todos");
      console.log(result.data);
      dispatch(todoActions.setInitialState(result.data));
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(todoActions.toggle(index));
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
