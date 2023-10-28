import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button
              onClick={() => dispatch(noteActions.delete(index))}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
