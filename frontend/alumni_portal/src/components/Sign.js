import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [link, setLink] = useState("");
  const [batch, setBatch] = useState("");
  const [picture, setPicture] = useState(null);
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleSumbit = async (event) => {
    event.preventDefault();

    // Validation
    if (!validator.isURL(link)) {
      alert("Invalid LinkedIn Profile URL.");
      return;
    }
    if (password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    // Proceed if validation passes
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("position", position);
      formData.append("link", link);
      formData.append("batch", batch);
      formData.append("picture", picture);
      formData.append("password", password);
      formData.append("company", company);

      let result = await fetch(
        "https://nits-ian.onrender.com/alumni/register",
        {
          method: "POST",
          body: formData,
        }
      );

      result = await result.json();
      console.log(result);
      if (result.status === "Passed") {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        alert(result.messag);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-10/12 py-6 flex flex-col">
          <h1 className="font-extrabold text-2xl font-serif text-center underline">
            Sign Up Form
          </h1>
          <div className="p-4 m-2">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="name" className="font-serif font-semibold">
                  Enter Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="FirstName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="email" className="font-serif font-semibold">
                  Enter Email address
                </label>
                <input
                  type="email"
                  value={email}
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Email_id"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="password" className="font-serif font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="phone" className="font-serif font-semibold">
                  Enter Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="company" className="font-serif font-semibold">
                  Enter Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  id="company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Company Name"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="position" className="font-serif font-semibold">
                Working Position
              </label>
              <input
                type="text"
                value={position}
                id="position"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Responsibility"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="link" className="font-serif font-semibold">
                LinkedIn Profile:
              </label>
              <input
                type="text"
                value={link}
                id="link"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="LinkedIn Profile"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="batch" className="font-serif font-semibold">
                  Enter Batch Number:
                </label>
                <input
                  type="text"
                  value={batch}
                  id="batch"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Batch Number"
                  onChange={(e) => setBatch(e.target.value)}
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="picture" className="font-serif font-semibold">
                  Choose a Profile Picture:
                </label>
                <br />
                <input
                  type="file"
                  id="picture"
                  accept="image/jpeg, image/png"
                  onChange={(e) => setPicture(e.target.files[0])}
                />
              </div>
            </div>

            <button
              onClick={handleSumbit}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
