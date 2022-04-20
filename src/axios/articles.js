// import axios from "axios";

import axios from "../api";
// {id , title ,body}

export const getArticles = async () => {
  const response = await axios({
    url: "/article",
    method: "get",
  });
  return response;
};

export const getArticleById = async (id) => {
  const response = await axios({
    url: `/article/${id}`,
    method: "get",
  });

  return response;
};

export const updateArticle = async (id) => {
  const response = await axios({
    url: `/article/${id}`,
    method: "fetch",
  });

  return response;
};

export const deleteArticle = async (id, author) => {
  const response = await axios({
    url: `/article/${id}`,
    method: "delete",
    data: {
      id: id,
      author: author,
    },
  });

  return response;
};
