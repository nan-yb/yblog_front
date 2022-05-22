// import axios from "axios";

import axios from "./client";
// {id , title ,body}

export const signIn = async (userId : string , password : string) => {
  const response = await axios({
    url: "/user/login",
    method: "post",
    data: {
      email: userId,
      password: password,
    },
  });

  return response;
};

export const getMyInfo = async () => {
  const response = await axios.get("/user/token");
  return response;
};

