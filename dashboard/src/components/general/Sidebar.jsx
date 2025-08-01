import { NavLink as Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="border p-2">
      <menu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </menu>
    </aside>
  );
}
