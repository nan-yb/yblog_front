import React from "react";
import { Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import AdminSetupPage from "@pages/admin/AdminSetupPage";
import ArticleRegisterPage from "@pages/article/ArticleRegisterPage";
import ArticleReadPage from "@pages/article/ArticleReadPage";
import ArticleModifyPage from "@pages/article/ArticleModifyPage";
import ExcelPage from "@pages/common/ExcelPage";
import GridPage from "@pages/common/GridPage";
import AdminMngeBoardPage from "@pages/admin/AdminMngeBoardPage";

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />

      <Route component={ArticleReadPage} path="/article/read/:id" exact />
      <Route component={ArticleRegisterPage} path="/article/create" exact />
      <Route component={ArticleModifyPage} path="/article/edit/:id" exact />

      <Route component={AdminSetupPage} path="/admin" exact />
      <Route component={GridPage} path="/admin/grid" exact />
      <Route component={AdminMngeBoardPage} path="/admin/board" exact />
      <Route component={ExcelPage} path="/admin/excel" exact />
    </>
  );
}

export default App;
