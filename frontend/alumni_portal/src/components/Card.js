import React from "react";

const Card = (props) => {
  return (
    <div className=" card bg-slate-50 shadow-lg border border-base-200 scale-75 hover:scale-90 transform transition duration-700 dark:bg-slate-900 dark:text-white dark:border">
      <figure>
        <img
          className="w-full h-64 object-cover"
          src={props.img}
          alt="Director"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-extrabold">{props.name}</h2>
        <div className="bg-[#003049] rounded-lg text-white text-center py-1 mt-2 text-sm font-bold">
          {props.pos}
        </div>
      </div>
      <div className="card-footer flex justify-between p-4">
        <a
          className=" flex  items-center p-2  rounded-md text-blue-950  bg-slate-50 hover:text-white hover:bg-[#003049] font-bold hover:scale-105 border-blue-950 border-[1px] hover:border-slate-50 left-2  flex-nowrap shadow-lg"
          href={props.more}
        >
          More
        </a>
        <a
          className=" flex  items-center p-2  rounded-md text-blue-950  bg-slate-50 hover:text-white hover:bg-[#003049] font-bold hover:scale-105 border-blue-950 border-[1px] hover:border-slate-50 left-2  flex-nowrap shadow-lg"
          href={props.link}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Card;
