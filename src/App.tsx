import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import AdminSetupPage from "@pages/member/AdminSetupPage";
import BoardRegisterPage from '@pages/board/BoardRegisterPage';
import BoardReadPage from '@pages/board/BoardReadPage';
import BoardModifyPage from '@pages/board/BoardModifyPage';

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      
      <Route component={BoardReadPage} path="/article/read/:id" exact />
      <Route component={BoardRegisterPage} path="/article/create" exact />
      <Route component={BoardModifyPage} path="/article/edit/:id" exact />

      <Route component={AdminSetupPage} path="/admin" exact />


    </>
  );
}

export default App;
