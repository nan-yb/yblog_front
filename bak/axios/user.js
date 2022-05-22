import axios from "axios";

// {id , title ,body}

export const getUser = async () => {
  const response = await axios.get("/user/token");
  return response.data;
};
