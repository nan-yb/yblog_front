import React from "react";
import okinawa from '@assets/main/okinawa.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    
    <div>
      <Link to="/admin/openAI">
        OPEN_AI
      </Link>
      <div className="container mx-auto my-4 p-4 max-w-screen-xl">
        <img
          src={okinawa}
          alt=""
          className="mx-auto justify-center items-end pb-4 flex rounded-3xl "
        />



        {/* <Link>
          asd
        </Link> */}
        {/* <TabUI prop={boardList} /> */}
      </div>
    </div>
  );
}

export default Home;
