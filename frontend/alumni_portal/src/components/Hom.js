import React from "react";
import m1 from "./images/college3.jpeg";
import Login from "./Login";

const Hom = () => {
  const auth = localStorage.getItem("user");
  let link = "/signup";
  if (auth) {
    link = "/alumni";
  }

  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${m1})` }}
      >
        <div className="absolute inset-0 bg-slate-950 opacity-50 z-0"></div>

        <div className="relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-lg md:text-xl lg:text-2xl font-serif italic">
              "I think the success of any college can be measured by the
              contribution the alumni make to our national life."
            </h2>
            <p className="mt-4 text-sm md:text-base animate-bounce text-end">
              <a
                href="https://www.azquotes.com/author/7900-John_F_Kennedy"
                className="text-orange-300 hover:text-white "
                target="_blank"
                rel="noopener noreferrer"
              >
                - John F. Kennedy
              </a>
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
            WELCOME TO <span className="text-yellow-400">NIT SILCHAR</span>{" "}
            ALUMNI
          </h1>

          <div className="flex justify-center space-x-4">
            <a
              href={link}
              className=" font-bold text-center p-3 rounded-lg   shadow-xl hover:bg-green-700 text-xl  font-sans mb-6 text-white bg-[#003049]"
            >
              Connections
            </a>
            {!auth ? (
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className=" font-bold text-center p-3 rounded-lg   shadow-xl  hover:bg-green-700 text-xl  font-sans mb-6 text-white bg-[#003049]"
              >
                Login
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <Login />
    </div>
  );
};

export default Hom;
