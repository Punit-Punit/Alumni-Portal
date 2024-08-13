import React, { useState } from "react";
import { useEffect } from "react";
import Job_card from "./JobCard.js";
const types = ["CSE", "ECE", "ME", "CE", "EE", "Others"];

const Job = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const fun = async () => {
      try {
        let result = await fetch("https://nits-ian.onrender.com/alumni/jobs");
        if (result) {
          result = await result.json();
          setData(result);
          console.log(result);
        } else {
          console.log("some internal error");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fun();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div className="flex justify-center p-5 py-8">
          <h1 className="font-extrabold font-serif text-3xl">Jobs</h1>
        </div>
        {types.map((val) => {
          const filteredData = data.filter((item) => item.branch === val);
          return filteredData.length > 0 ? (
            <div key={val} id={val}>
              <h1 className="font-extrabold py-7 text-xl text-center font-serif underline">
                Jobs Related to {val} Students
              </h1>
              <div className="grid shadow-xl grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 border-2 border-slate-300 rounded-3xl">
                {filteredData.map(
                  (job) => (
                    {},
                    (
                      <Job_card
                        key={job.id}
                        company={job.company}
                        role={job.role}
                        type={job.type}
                        location={job.location}
                        dat={job.date}
                        link={job.link}
                      />
                    )
                  )
                )}
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Job;
