import React from "react";
import axios from "../api";
import TabUI from "./common/TabUI";
import { useEffect, useState } from "react";

function Home() {
  const [boardList, setBoardList] = useState([]);

  const fetchHotels = async () => {
    try {
      // 요청 처음에 초기화
      setBoardList([]);

      const data = await axios({
        url: "/main",
        method: "get",
      });

      setBoardList(data.content);
    } catch (e) {}
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div>
      <div className="container mx-auto my-4 max-w-screen-xl">
        <img
          src={require("../static/main/okinawa.png")}
          alt=""
          className="mx-auto justify-center items-end pb-4 flex rounded-3xl "
        />

        <TabUI prop={boardList} />
      </div>
    </div>
  );
}

export default Home;
