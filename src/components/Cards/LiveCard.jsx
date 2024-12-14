import { Button } from "@mui/material";
import React from "react";

const LiveCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {data.length > 0 ? (
        data.map((news, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-md text-white"
          >
            <h3 className="text-xl font-bold">{news.title}</h3>
            <p className="mt-2 text-sm">{news.text}</p>
            <p className="mt-2 text-sm">
              <strong>Source:</strong> {news.source_name}
            </p>
            <p className="mt-2 text-sm">
              <strong>Date:</strong> {news.date}
            </p>
            <a
              href={news.news_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white bg-gradient-text rounded-2xl p-2 text-sm hover:underline"
            >
              Read More
            </a>
          </div>
        ))
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
};

export default LiveCard;
