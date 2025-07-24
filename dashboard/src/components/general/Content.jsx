import LoginForm from "@/components/auth/LoginForm";
import AuhContext from "@/contexts/AuthContext";
import useAuth from "@/hooks/useAuth";

export default function Content() {
  const { user, isLoggedIn } = useAuth();

  return (
    <main className="border p-2 w-full">
      <h2 className="text-2xl">Homepage</h2>
      {isLoggedIn && <div className="text-blue-500">Welcome {user.name}</div>}
    </main>
  );
}
