import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-36 px-6 absolute text-white bg-gradient-to-r from-black">
      <h2 className="font-bold text-2xl md:text-6xl">{title}</h2>
      <p className="hidden md:inline-block w-1/4 py-4">{overview}</p>
      <div>
        <button className="bg-gray-600 md:py-4 md:px-10 py-2 px-6 font-bold rounded-lg">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 py-4 px-10 mx-2 font-bold rounded-lg">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
