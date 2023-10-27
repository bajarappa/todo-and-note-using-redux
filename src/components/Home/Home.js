import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <Link to="todo" className="btn btn-warning link">
          To Do App
        </Link>
        <Link to="notes" className="btn btn-warning link">
          Note Keeper
        </Link>
      </div>
    </>
  );
}
