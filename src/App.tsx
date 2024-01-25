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
      <Route element={<HomePage/>} path="/"  />

      <Route element={<ArticleReadPage/>} path="/article/read/:id"  />
      <Route element={<ArticleRegisterPage/>} path="/article/create"  />
      <Route element={<ArticleModifyPage/>} path="/article/edit/:id"  />

      <Route element={<AdminSetupPage/>} path="/admin"  />
      <Route element={<GridPage/>} path="/admin/grid"  />
      <Route element={<AdminMngeBoardPage/>} path="/admin/board"  />
      <Route element={<ExcelPage/>} path="/admin/excel"  />
    </>
  );
}

export default App;
