import axios from "axios";

// {id , title ,body}

export const getArticles = async () => {
  const response = await axios.get("/articles");
  return response.data;
};

export const getArticleById = async (id) => {
  const response = await axios.get(`/article/${id}`);
  return response.data;
};
