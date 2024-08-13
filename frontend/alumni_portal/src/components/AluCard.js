import React from "react";

const AluCard = (props) => {
  return (
    <div className="p-4 m-4 transform transition-transform duration-500 hover:scale-105">
      <div className="p-6 border border-gray-300 shadow-lg rounded-lg bg-white dark:bg-gray-900">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-950"
            src={`https://nits-ian.onrender.com/uploads/${props.img}`}
            alt={`Profile of ${props.name}`}
          />
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {props.name}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{props.post}</p>
            <p className="mt-2 px-3 py-1 bg-[#003049] text-white rounded-full text-center text-sm">
              {props.com}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <a
            href={props.more}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-white bg-[#003049] hover:bg-blue-800 font-bold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={props.more}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-blue-950 border border-blue-950 bg-white hover:bg-[#003049] hover:text-white font-bold transition-colors"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AluCard;
