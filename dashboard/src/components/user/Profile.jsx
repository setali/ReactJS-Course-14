import React, { useContext } from "react";
import AuhContext from "@/contexts/AuthContext";

export default function Profile() {
  const { user } = useContext(AuhContext);

  return (
    <main className="border p-2 w-full">
      <h2 className="text-2xl">Profile</h2>
      <div>Name: {user.name}</div>
      <div>Family: {user.family}</div>
    </main>
  );
}
