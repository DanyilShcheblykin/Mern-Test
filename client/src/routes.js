import React from "react";
import {Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import LinksPage from "./pages/LinksPage";
export const useRoutes = (isAuthenticated) => {

  if (isAuthenticated) {
    return (
      <>
        <Route path="/links" element={<LinksPage></LinksPage>}></Route>
        <Route path="/create" element={<CreatePage></CreatePage>}></Route>
        <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
      </>
    );
  }else{
    return <Route exact path="/" element={<AuthPage></AuthPage>}></Route>;

  }
};
