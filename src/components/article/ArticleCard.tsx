import React from "react";
import noImage from "@assets/image/no-image.png";
import { Link } from "react-router-dom";

function ArticleCard({ data  } : any) {
  if (!data) return null;

  return (
    <div key={data._id}>
      <Link to={`/article/read/${data._id}`}>
        <div className="md:max-w-xs w-full rounded overflow-hidden shadow-lg flex flex-col mx-4">
          <div style={{ paddingTop: "52%" }} className="w-full h-48 relative">
            <img
              className="w-full h-full top-0 left-0 absolute object-contain"
              src={noImage}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArticleCard;
