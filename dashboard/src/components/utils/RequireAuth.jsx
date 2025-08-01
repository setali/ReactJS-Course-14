import Loading from "@/components/general/Loading";
import { Navigate } from "react-router";
import useUser from "@/hooks/useUser";

export default function RequireAuth({ children }) {
  const { isLoggedIn, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
