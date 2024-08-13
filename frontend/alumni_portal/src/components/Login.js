import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    let result = await fetch("https://nits-ian.onrender.com/alumni/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.status === "Passed") {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form method="dialog ">
            <Link
              to="/"
              className=" bg-white content-center text-center border-2 border-blue-950 hover:text-white hover:bg-[#003049] font-extrabold text-blue-950 btn-circle btn-ghost absolute right-1 top-3"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-extrabold text-2xl font-serif text-center underline">
              Login
            </h3>
            <div className="grid md:grid-cols-1 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="email" className="font-serif font-semibold">
                  Enter Email address
                </label>
                <input
                  type="email"
                  value={email}
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-2 border-slate-300 rounded-md appearance-none dark:text-white dark:border-gray-600 "
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
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-slate-300 rounded-md appearance-none dark:text-white dark:border-gray-600 "
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button
                className="btn btn-primary  text-blue-950 hover:text-white hover:bg-[#003049] bg-slate-50 font-bold hover:scale-105 border-blue-950 border-[1px] hover:border-slate-50 left-2 "
                onClick={handleLogin}
              >
                Login
              </button>
              <div className="flex items-center">
                <p className="font-extrabold text-base font-serif text-center underline">
                  Not registered?
                  <Link to="/Signup" className="underline cursor-pointer">
                    <span className=" ml-2 btn-link">Sign Up</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
