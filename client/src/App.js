import React from "react";
import "materialize-css";
import { useRoutes } from "./routes";
import { Routes } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import NavBar from "./components/navBar";
import Loader from "./components/Loader";

function App() {
  const { token, login, logout, userId , ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);


  if(!ready){
    return <Loader></Loader>
  }

  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <>
        {isAuthenticated && <NavBar></NavBar>}

        <Routes>{routes}</Routes>
      </>
    </AuthContext.Provider>
  );
}
export default App;
