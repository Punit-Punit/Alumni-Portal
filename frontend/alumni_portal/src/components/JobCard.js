import React from "react";

const JobCard = (item) => {
  return (
    <>
      <div className="flex justify-center p-6 sm:py-3 hover:scale-105  ">
        <div className="bg-white border-2 border-gray-600 shadow-xl  w-full max-w-4xl flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row  gap-3  justify-between px-5 py-4 rounded-md">
          <div>
            <span className="text-purple-800 text-sm">{item.company}</span>
            <h3 className="font-bold mt-1">{item.role}</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                {item.type}
              </span>
              <span className="text-slate-600 text-sm flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {item.location}
              </span>
            </div>
          </div>
          <div className="flex items-center ">
            <a href={item.link}>
              <button className=" flex  items-center p-2  rounded-md text-blue-950  bg-slate-50 hover:text-white hover:bg-[#003049] font-bold hover:scale-105 border-blue-950 border-[1px] hover:border-slate-50 left-2  flex-nowrap shadow-lg">
                Apply Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
