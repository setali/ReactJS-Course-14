import LoginForm from "@/components/auth/LoginForm";
import { Navigate } from "react-router";
import useUser from "@/hooks/useUser";

export default function LoginPage() {
  const { isLoading, isLoggedIn } = useUser();

  if (isLoading) {
    return "Loading ....";
  }

  console.log("isLoggedIn", isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return (
      <main className="border p-2 w-full">
        <LoginForm />
      </main>
    );
  }
}
