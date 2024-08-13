import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import img1 from "./images/agni_mitra_viswas.jpg";
import img2 from "./images/director.jpeg";
import img3 from "./images/birndra_bhaumik.jpeg";
import { useState } from "react";

const s1 = "Dean, Alumni Relations";
const s2 = "Dean, Academic";
const s3 = "Director, NIT Silchar";
const s11 = "Dr. Agnimitra Biswas";
const s22 = "Prof. Brindra Bhowmick";
const s33 = "Prof. Dilip Kumar Baidya";
const s111 = "http://me.nits.ac.in/dr-a-biswas/";
const s222 = "http://ec.nits.ac.in/brinda/";
const s333 = "http://www.nits.ac.in/administration/director.php";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const handleContact = () => {
    alert("Message send Successfully");
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12 md:w-2/3 lg:w-1/2 flex flex-col items-center m-12">
          <div className="p-4">
            <h1 className="font-bold text-center p-3 rounded-lg hover:text-blue-950 border-[1px] shadow-xl border-blue-950 hover:bg-slate-50 text-3xl font-sans mb-6 text-white bg-[#003049]">
              contact Us
            </h1>
          </div>
          <div className="w-full p-6 border-2 rounded-lg bg-slate-50 border-gray-300 bg-slate-30  shadow-neon">
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="name">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    value={name}
                    id="name"
                    className="border-2 border-gray-300 rounded-md p-2 font-sans"
                    placeholder="Enter Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="email">
                    Email address:
                  </label>
                  <input
                    type="email"
                    value={email}
                    id="email"
                    className="border-2 border-gray-300 rounded-md p-2 font-sans"
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold font-serif mb-2"
                    htmlFor="textarea"
                  >
                    Message
                  </label>
                  <textarea
                    className="border-2 border-gray-300 rounded-md p-2 font-sans"
                    id="textarea"
                    value={textarea}
                    name="textarea"
                    rows="3"
                    cols="50"
                    onChange={(e) => setTextarea(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    className=" font-bold text-center p-3 rounded-lg hover:text-blue-950 border-[1px] shadow-xl border-blue-950 hover:bg-slate-50 text-xl  font-sans mb-6 text-white bg-[#003049]"
                    onClick={handleContact}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around m-1 my-0 sm:flex-row">
        <Card img={img1} pos={s1} name={s11} link={s111} more={s111} />
        <Card img={img2} pos={s3} name={s33} link={s333} more={s333} />
        <Card img={img3} pos={s2} name={s22} link={s222} more={s222} />
      </div>
    </>
  );
};

export default Contact;
