import React, { useContext } from "react";
import AuhContext from "@/contexts/AuthContext";
import Loading from "@/components/general/Loading";
import { Navigate } from "react-router";

export default function RequireAuth({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuhContext);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
