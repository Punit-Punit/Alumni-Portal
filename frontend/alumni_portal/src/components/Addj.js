import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addj = () => {
  const [branch, setBranch] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const branches = ["CSE", "ECE", "ME", "CE", "EE", "Other"];
  const user_id = JSON.parse(localStorage.getItem("user"))._id;
  const handleadd = async () => {
    let result = await fetch("https://nits-ian.onrender.com/alumni/add", {
      method: "post",
      body: JSON.stringify({
        user_id,
        branch,
        company,
        type,
        role,
        location,
        link,
        date,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/jobs");
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12 md:w-2/3 lg:w-1/2  flex flex-col items-center m-12">
          <div className="p-4">
            <h1 className="font-bold text-center p-3 rounded-lg hover:text-blue-950 border-[1px] shadow-xl border-blue-950 hover:bg-slate-50 text-3xl font-sans mb-6 text-white bg-[#003049]">
              New Opening
            </h1>
          </div>
          <div className="w-full p-6 border-2 rounded-lg bg-slate-50 border-slate-300 bg-slate-30 shadow-xl">
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2">
                    Eligible Branch:
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {branches.map((branchOption, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="radio"
                          id={`branch-${index}`}
                          name="branch"
                          value={branchOption}
                          className="mr-2"
                          checked={branch === branchOption}
                          onChange={(e) => setBranch(e.target.value)}
                        />
                        <label
                          htmlFor={`branch-${index}`}
                          className="font-sans"
                        >
                          {branchOption}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold font-serif mb-2"
                    htmlFor="company"
                  >
                    Company Name:
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    className="border-2 border-slate-300 rounded-md p-2 font-sans"
                    placeholder="Enter Company Name"
                    onChange={(e) => setCompany(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="role">
                    Role Type:
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    className="border-2 border-slate-300 rounded-md p-2 font-sans"
                    placeholder="Enter Role Type"
                    onChange={(e) => setRole(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="type">
                    Working Type:
                  </label>
                  <input
                    type="text"
                    id="type"
                    value={type}
                    className="border-2 border-slate-300 rounded-md p-2 font-sans"
                    placeholder="ex-fulltime/parttime"
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold font-serif mb-2"
                    htmlFor="location"
                  >
                    Location:
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    className="border-2 border-slate-300 rounded-md p-2 font-sans"
                    placeholder="Enter Location"
                    onChange={(e) => setLocation(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="link">
                    More Information:
                  </label>
                  <input
                    type="url"
                    id="link"
                    value={link}
                    className="border-2 border-slate-300 rounded-md p-2 font-sans"
                    placeholder="Link for more info.."
                    onChange={(e) => setLink(e.target.value)}
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="date">
                    Last Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    className="border-2 border-slate-300 rounded-md p-2 font-sans"
                    placeholder="Enter Last Date"
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleadd}
                    className="font-bold text-center p-3 rounded-lg hover:text-blue-950 border-[1px] shadow-xl border-blue-950 hover:bg-slate-50 text-xl  font-sans mb-6 text-white bg-[#003049]"
                  >
                    {" "}
                    Sumbit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addj;
