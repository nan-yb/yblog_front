// import axios from "axios";

import axios from "./client";

export const getArticles = async () => {
  const response = await axios({
    url: "/article",
    method: "get",
  });
  return response;
};

export const getArticleById = async (id : string) => {
  const response = await axios({
    url: `/article/${id}`,
    method: "get",
  });

  return response;
};

export const createArticle = async ( content : string , board : string , title : string , thumbImageUrl : string) =>{
  const response = await axios({
    url: "/article/create",
    method: "post",
    data: {
      content: content,
      board: board,
      title: title,
      thumbImageUrl: thumbImageUrl,
    },
  });

  return response;
}

// export const updateArticle = async (id : string) => {
//   const response = await axios({
//     url: `/article/${id}`,
//     method: "fetch",
//   });

//   return response;
// };

export const deleteArticle = async (id : string, author : string) => {
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
