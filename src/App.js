import React, { useEffect } from "react";
import axios from "./api";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // * BrowserRouter 불러오기
//componenet
import Home from "./components/Home";
import Admin from "./components/Admin";
import Write from "./components/Write";
import Gnb from "./components/Gnb";
import Article from "./components/Article";

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
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="admin" element={<Admin />} />
        
        <Route path="article" element={<Article />}>
          <Route path=":article" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
