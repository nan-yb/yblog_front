import React from "react";
import { Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import AdminSetupPage from "@pages/member/AdminSetupPage";
import ArticleRegisterPage from "@pages/article/ArticleRegisterPage";
import ArticleReadPage from "@pages/article/ArticleReadPage";
import ArticleModifyPage from "@pages/article/ArticleModifyPage";
import ExcelPage from "@pages/common/ExcelPage";
import GridPage from "@pages/common/GridPage";

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />

      <Route component={ArticleReadPage} path="/article/read/:id" exact />
      <Route component={ArticleRegisterPage} path="/article/create" exact />
      <Route component={ArticleModifyPage} path="/article/edit/:id" exact />

      <Route component={AdminSetupPage} path="/admin" exact />
      <Route component={ExcelPage} path="/common/excel" exact />
      <Route component={GridPage} path="/common/grid" exact />
    </>
  );
}

export default App;
