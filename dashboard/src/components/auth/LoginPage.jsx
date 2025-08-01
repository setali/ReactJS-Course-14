import LoginForm from "@/components/auth/LoginForm";
import { Navigate, useLocation } from "react-router";
import useUser from "@/hooks/useUser";

export default function LoginPage() {
  const { isLoading, isLoggedIn } = useUser();

  const location = useLocation();

  console.log(location);

  if (isLoading) {
    return "Loading ....";
  }

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || "/"} />;
  } else {
    return (
      <main className="border p-2 w-full">
        <LoginForm />
      </main>
    );
  }
}
