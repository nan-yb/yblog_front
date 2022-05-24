// import axios from "axios";

import client from "./client";
// {id , title ,body}

export const signIn = async (userId : string , password : string) => {
  const response = await client({
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
  const response = await client.get('/user/token');
  return response;
};

