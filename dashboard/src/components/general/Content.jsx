import React, { useContext } from "react";
import { AuhContext } from "../../App";
import LoginForm from "../auth/LoginForm";

export default function Content() {
  const { user, isLoggedIn } = useContext(AuhContext);

  return (
    <main className="border p-2 w-full">
      {isLoggedIn ? (
        <div className="text-blue-500">Welcome {user.name}</div>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}
