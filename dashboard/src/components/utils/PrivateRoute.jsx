import Loading from "@/components/general/Loading";
import { Navigate, Outlet } from "react-router";
import useUser from "@/hooks/useUser";
import { useLocation } from "react-router";

export default function PrivateRoute() {
  const { isLoggedIn, isLoading } = useUser();

  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
