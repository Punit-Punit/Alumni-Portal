import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./images/logo1.png";
import Login from "./Login.js";
function Navbar() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const [user, setUser] = useState({});
  let localdata = localStorage.getItem("user");
  let im =
    "data:image/jpeg;base64,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";

  localdata = JSON.parse(localdata);
  useEffect(() => {
    const fun = async () => {
      if (localdata) {
        let data = await fetch(
          "https://nits-ian.onrender.com/alumni/dashdata",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localdata.token}`,
            },
          }
        );

        data = await data.json();
        console.log(data.user.picture);
        setUser(data.user);
      }
    };
    fun();
  }, []);
  if (user) {
    let t = `https://nits-ian.onrender.com/uploads/${user.picture}`;
    console.log(t);
    if (t) {
      im = t;
    }
  }
  const logouthandle = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="navbar h-3 w-100% bg-[#003049] flex flex-row space-x-5 justify-between sticky top-0 z-20 ">
        <div>
          <Link to="/" className="flex ">
            <img className=" h-14 w-14 rounded-full ml-1 " src={img} />
            <p className="bg-[#003049] font-extrabold font-serif text-white text-3xl  rounded-lg p-2 m-1 hover:scale-1/2">
              NITS-ian
            </p>
          </Link>
        </div>

        <div>
          <div>
            <div className="dropdown text-slate-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#003049] text-white font-bold rounded-lg w-[130px]  "
              >
                <li className="hover:text-blue-950 rounded-md hover:bg-slate-50">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-950 rounded-md hover:bg-slate-50">
                  <Link to="/gallery">Gallery</Link>
                </li>
                {auth ? (
                  <>
                    <li className="hover:text-blue-950 rounded-md hover:bg-slate-50">
                      <Link to="/alumni">Alumni</Link>
                    </li>
                    <li className="hover:text-blue-950 rounded-md hover:bg-slate-50">
                      <Link to="/jobs">Jobs</Link>
                    </li>
                  </>
                ) : null}
                <li className="hover:text-blue-950 rounded-md hover:bg-slate-50">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-blue-950 rounded-md hover:bg-slate-50 text-nowrap">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="hover:text-blue-950 rounded-md hover:bg-slate-50 text-nowrap">
                  <Link to="/payment">Donations</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" hidden font-bold justify-between space-x-8 lg:flex pr-4">
            <ul
              className="menu menu-horizontal text-white flex flex-nowrap text-bas 
            "
            >
              <li className="hover:bg-slate-50 hover:text-blue-950 rounded-md">
                <Link to="/">Home</Link>
              </li>

              <li className="hover:bg-slate-50 hover:text-blue-950 rounded-md">
                <Link to="/gallery">Gallery</Link>
              </li>
              {auth ? (
                <>
                  <li className="hover:bg-slate-50 hover:text-blue-950 rounded-md">
                    <Link to="/alumni">Alumni</Link>
                  </li>
                  <li className="hover:bg-slate-50 hover:text-blue-950 rounded-md">
                    <Link to="/jobs">Jobs</Link>
                  </li>
                </>
              ) : null}

              <li className="hover:bg-slate-50 hover:text-blue-950 rounded-md">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:bg-slate-50 hover:text-blue-950 rounded-md">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="hover:bg-slate-50 hover:text-blue-950 rounded-md">
                <Link to="/payment">Donations</Link>
              </li>
            </ul>
          </div>
          {!auth ? (
            <>
              <div className="flex space-x-2">
                <div>
                  <Link
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="btn btn-primary  text-blue-950 hover:text-white hover:bg-green-700 bg-slate-50 font-bold hover:scale-105 border-blue-950 border-[1px] hover:border-slate-50 left-2 "
                  >
                    Login
                  </Link>
                  <Login />
                </div>
                <div>
                  <Link
                    Link
                    to="/signup"
                    className="btn btn-primary  text-blue-950 hover:text-white hover:bg-green-700 bg-slate-50 font-bold hover:scale-105 border-blue-950 border-[1px] hover:border-slate-50 left-2 "
                  >
                    SignUp
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex space-x-2 justify-center items-center ml-2">
              <Link to="/profile">
                <img
                  className="rounded-full w-[45px] h-[45px]"
                  src={im}
                  alt="profile"
                ></img>
              </Link>
              <button
                onClick={logouthandle}
                className=" p-2  rounded-md text-blue-950  bg-slate-50 hover:text-white hover:bg-red-500 font-bold hover:scale-105 border-blue-950 border-[1px] hover:border-slate-50 left-2 "
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
