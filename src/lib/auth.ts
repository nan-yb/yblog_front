// import axios from "axios";

import { AxiosResponse } from "axios";
import client from "./client";
// {id , title ,body}

export const adminSetup = async (email: string, nickname: string, password: string , authYn : boolean) => {
  const response:AxiosResponse = await client.post("/user/create", { email , password , authYn ,  nickname });
  return response;
}

export const signIn = async (userId : string , password : string) => {
  const response:AxiosResponse = await client({
    url: "/user/login",
    method: "post",
    data: {
      email: userId,
      password: password,
    },
  });

  return response;
};

export const signUp = async (email : string ,password : string ,nickName : string ,company : string ) => {
  const response = await client({
    url: "/user/create",
    method: "post",
    data: {
      email: email,
      password: password,
      company: company,
      nickname: nickName,
    },
  });
  
  return response;
};


export const getMyInfo = async () => {
  const response = await client.get('/user/token');
  return response;
};

