import { useState } from "react";
import { useEffect } from "react";
import { getToken, removeToken, setToken } from "../tools/utils";
import request from "../tools/request";

function useAuth() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(data) {
    return request
      .post("/api/login", data)
      .then(({ data: { token, ...user } }) => {
        setUser(user);
        setToken(token);
        setIsLoggedIn(true);
      });
  }

  function logout() {
    removeToken();
    setIsLoggedIn(false);
    setUser({});
  }

  console.log("useAuth", isLoggedIn);

  useEffect(() => {
    const token = getToken();

    if (token) {
      setIsLoading(true);
      request("http://localhost:3000/api/user")
        .then(({ data }) => {
          setUser(data);
          setIsLoggedIn(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { user, isLoading, isLoggedIn, login, logout };
}

export default useAuth;
