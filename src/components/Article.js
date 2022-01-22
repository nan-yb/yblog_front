import { useParams } from "react-router-dom";
import axios from "../api";
import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import "../assets/board.scss";

const Article = () => {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  // const editorRef = useRef();
  const fetchArticles = async () => {
    try {
      // 요청 처음에 초기화
      setArticle(null);
      setLoading(true);

      const data = await axios({
        url: `/article/${params.article}`,
        method: "get",
      });

      setArticle(data.article);
    } catch (e) {}

    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (!article) return null;

  return (
    <div>
      <div className="mx-auto my-4 max-w-screen-xl">
        <div className="w-6/12 justify-center mx-auto">
          <div className="flex w-full justify-center mt-12 mb-8">
            <span className="rounded text-7xl text-gray-500 font-bold ">
              {article.title}
            </span>
          </div>

          <div className="flex text-base justify-end items-center px-2">
            <span className="inline-flex text-base text-gray-500 font-bold items-center px-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>

              <span className="px-1">{article.viewCount}</span>
            </span>

            <span className="inline-flex text-base text-gray-500 font-bold px-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span className="px-1">{article.thumbupCount}</span>
            </span>

            <span className="inline-flex text-base text-gray-500 font-bold px-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span className="px-1">
                <Moment format="YYYY년 MM월 DD일">{article.createdAt}</Moment>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-6/12 justify-center mx-auto mt-24 text-xl">
        <Viewer initialValue={article.content} />
      </div>
    </div>
  );
};

export default Article;
