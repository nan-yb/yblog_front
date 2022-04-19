import React, { useEffect } from "react";
import axios from "./api";
import { useDispatch } from "react-redux";
import { setUser } from "./modules/common";

import { Routes, Route } from "react-router-dom"; // * BrowserRouter 불러오기
//componenet
import Home from "./components/Home";
import Admin from "./components/admin/Admin";
import Write from "./components/Write";
import ArticlePage from "./pages/ArticlePage";

function App() {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const data = await axios({
        url: "/user/token",
        method: "get",
      });

      const user = {
        email: data.email,
        authYn: data.authYn,
        nickname: data.nickname,
      };

      dispatch(setUser(user, token));
    } catch (e) {}
  };

  useEffect(() => {
    fetchUsers();
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="write" element={<Write />} />
      <Route path="admin" element={<Admin />} />

      <Route path="article" element={<ArticlePage />}>
        <Route path=":article" element={<ArticlePage />} />
      </Route>
    </Routes>
  );
}

export default App;
