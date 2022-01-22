import { Tab } from "@headlessui/react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabUI = ({ prop }) => {
  if (prop.length === 0) return <div>123</div>;

  const boardList = prop;
  const articleList = prop[0].content;

  if (!articleList) return <div>123</div>;

  return (
    <div className="max-w-md px-2 py-16 sm:px-0 w-72">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-sky-900 rounded-xl">
          {Object.values(boardList).map((board) => (
            <Tab
              key={board._id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium rounded-lg",
                  selected
                    ? "bg-sky-900 bg-opacity-100 text-white"
                    : "text-sky-900  hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {board.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(boardList).map((board, id) => (
            <Tab.Panel
              key={id}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              {Object.values(board.content).map((article, idx) => (
                <Link to={`/article/${article.key}`} key={article.key}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8">
                    {/* {article.thumbImageUrl ? } */}
                    <img
                      className="w-full"
                      src={
                        article.thumbImageUrl
                          ? article.thumbImageUrl
                          : require("../../static/main/default.jpg")
                      }
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {article.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {article.content}
                      </p>
                    </div>
                    <div className="pt-4 ">
                      <span className="inline-flex rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2  mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-1 pb-1"
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
                        <Moment format="YYYY.MM.DD">{article.createdAt}</Moment>
                      </span>
                      <span className="inline-flex rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-1 pb-1"
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
                        {article.thumbupCount}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabUI;
