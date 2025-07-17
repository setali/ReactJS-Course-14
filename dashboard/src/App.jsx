import React from "react";
import { useState } from "react";
import Content from "./components/general/Content";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import Sidebar from "./components/general/Sidebar";
import { useEffect } from "react";
import axios from "axios";

// http://localhost:3000
// http://localhost:5173

export const AuhContext = React.createContext();

function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState();

  function login(data) {
    return axios
      .post("http://localhost:3000/api/login", data)
      .then(({ data }) => {
        setUser(data);
        setIsLoggedIn(true);
      })
      
  }

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios("http://localhost:3000/api/user")
  //     .then(({ data }) => {
  //       setUser(data);
  //       setIsLoggedIn(true);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  return (
    <div>
      <AuhContext.Provider
        value={{ user, isLoading, isLoggedIn, loginError, login }}
      >
        <div className="flex flex-col gap-2 m-2 h-dvh">
          <Header user={user} />
          <div className="flex gap-2 h-full">
            <Sidebar />
            <Content user={user} />
          </div>
          <Footer />
        </div>
      </AuhContext.Provider>
    </div>
  );
}

export default App;
