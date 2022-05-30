import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminSetupPage from "./pages/member/AdminSetupPage";
import BoardRegisterPage from '@pages/board/BoardRegisterPage';

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      
      <Route component={BoardRegisterPage} path="/write" exact />
      <Route component={AdminSetupPage} path="/admin" exact />


      {/* <Route component={AdminSetupPage} path="/member/setup" />
      
      <Route component={CodeGroupListPage} path="/codegroup" exact />
      <Route component={CodeGroupRegisterPage} path="/codegroup/create" />
      <Route component={CodeGroupModifyPage} path="/codegroup/edit/:groupCode" />
      <Route component={CodeGroupReadPage} path="/codegroup/read/:groupCode" />
      
    <Route component={CodeDetailListPage} path="/codedetail" exact />
      <Route component={CodeDetailRegisterPage} path="/codedetail/create" />
      <Route component={CodeDetailModifyPage} path="/codedetail/edit/:groupCode/:codeValue" />
      <Route component={CodeDetailReadPage} path="/codedetail/read/:groupCode/:codeValue" /> */}
    </>
  );
}

export default App;
