import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
// import { ObjectId } from 'bson';
const Updatep = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [link, setLink] = useState("");
  const [batch, setBatch] = useState("");
  let [picture, setPicture] = useState("");
  let [user, setUser] = useState("");
  const [company, setCompany] = useState("");
  const [id, setId] = useState("");
  let localdata = localStorage.getItem("user");
  localdata = JSON.parse(localdata);
  const location = useLocation();
  useEffect(() => {
    const fun = async () => {
      let data = await fetch("https://nits-ian.onrender.com/alumni/dashdata", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localdata.token}`,
        },
      });
      data = await data.json();
      setUser(data.user);
      const val = data.user;
      setId(val._id);
      setName(val.name);
      setEmail(val.email);
      setPhone(val.phone);
      setCompany(val.company);
      setPosition(val.position);
      setLink(val.link);
      setBatch(val.batch);
    };
    fun();
  }, [localdata.token, location.pathname]);

  const handleupdate = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", position);
    formData.append("link", link);
    formData.append("batch", batch);
    formData.append("picture", picture);
    formData.append("company", company);

    try {
      let result = await fetch(
        `https://nits-ian.onrender.com/alumni/user/${id}`,
        {
          method: "Put",
          body: formData,
        }
      );
      result = await result.json();
      if (result.message) {
        toast.error(result.message.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      alert(error);
    }
    navigate("/profile");
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12 md:w-2/3 lg:w-1/2 flex flex-col items-center m-12">
          <div className="p-4">
            <h1 className="font-bold text-center p-3 rounded-lg hover:text-blue-950 border-[1px] shadow-xl border-blue-950 hover:bg-slate-50 text-3xl font-sans mb-6 text-white bg-[#003049]">
              Update Profile
            </h1>
          </div>
          <div className="w-full bg-slate-50 p-6 border-2 rounded-lg border-gray-300 bg-slate-30 shadow-xl">
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
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                    disabled
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
                    disabled
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="phone">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    id="phone"
                    className="border-2 border-gray-300 rounded-md p-2 font-sans"
                    placeholder="Enter Your Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
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
                    value={company}
                    id="company"
                    className="border-2 border-gray-300 rounded-md p-2 font-sans"
                    placeholder="Enter Your Company"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold font-serif mb-2"
                    htmlFor="position"
                  >
                    Working Position:
                  </label>
                  <input
                    type="text"
                    value={position}
                    id="position"
                    className="border-2 border-gray-300 rounded-md p-2 font-sans"
                    placeholder="Enter Your Position"
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold font-serif mb-2" htmlFor="link">
                    LinkedIn Profile:
                  </label>
                  <input
                    type="url"
                    value={link}
                    id="link"
                    className="border-2 border-gray-300 rounded-md p-2 font-sans"
                    placeholder="Enter Your LinkedIn Link"
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="flex flex-col">
                    <label
                      className="font-bold font-serif mb-2"
                      htmlFor="batch"
                    >
                      Batch Number:
                    </label>
                    <input
                      type="text"
                      value={batch}
                      id="batch"
                      className="border-2 border-gray-300 rounded-md p-2 font-sans"
                      placeholder="Enter Batch Number"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="font-bold font-serif mb-2"
                      htmlFor="picture"
                    >
                      Choose a Profile Picture:
                    </label>
                    <input
                      type="file"
                      id="picture"
                      accept="image/jpeg, image/png"
                      className="border-2 border-gray-300 rounded-md p-2 font-sans"
                      onChange={(e) => setPicture(e.target.files[0])}
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    className=" font-bold text-center p-3 rounded-lg hover:text-blue-950 border-[1px] shadow-xl border-blue-950 hover:bg-slate-50 text-xl  font-sans mb-6 text-white bg-[#003049]"
                    onClick={handleupdate}
                  >
                    Update
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

export default Updatep;
