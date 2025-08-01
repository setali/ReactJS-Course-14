import { Link } from "react-router";
import useUser from "@/hooks/useUser";
import { useLocation } from "react-router";

export default function Header() {
  const { user, isLoading, isLoggedIn, logout } = useUser();

  const location = useLocation();

  return (
    <div className="border p-2 flex justify-between">
      <h2 className="text-lg">Dashboard</h2>
      {isLoading ? (
        "..."
      ) : isLoggedIn ? (
        <div className="flex gap-2 items-center">
          <div className="text-sm text-green-600">
            <Link to="/profile">{user.name}</Link>
          </div>
          <span
            className="text-xs text-red-500 cursor-pointer"
            onClick={logout}
          >
            Logout
          </span>
        </div>
      ) : (
        <div>
          <Link to="/login" state={{ from: location.pathname }}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
