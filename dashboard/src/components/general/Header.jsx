import React from "react";
import { useContext } from "react";
import { AuhContext } from "../../App";

export default function Header() {
  const { user, isLoading, isLoggedIn } = useContext(AuhContext);

  return (
    <div className="border p-2 flex justify-between">
      <h2 className="text-lg">Dashboard</h2>
      {isLoading ? (
        "..."
      ) : isLoggedIn ? (
        <div className="text-sm text-green-600">{user.name}</div>
      ) : (
        <div>Login</div>
      )}
    </div>
  );
}
