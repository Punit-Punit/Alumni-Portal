import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Alu_card from "./AluCard";

const years = Array.from({ length: 26 }, (_, index) => 2000 + index).reverse();

const Alum = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    const run = async () => {
      try {
        let result = await fetch("https://nits-ian.onrender.com/alumni/alum");
        result = await result.json();
        SetData(result);
      } catch (error) {
        alert(error.messege);
      }
    };
    run();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div className="flex justify-center p-5 py-8">
          <h1 className="font-extrabold text-center font-serif text-3xl">
            AlmaMaters
          </h1>
        </div>
        {years.map((year) => {
          const alumni = data.filter((item) => item.batch === year.toString());

          if (alumni.length === 0) return null;

          return (
            <div key={year}>
              <h1 className="font-bold py-4 text-xl text-center font-serif underline">
                CLASS OF {year}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {alumni.map((alumnus) => (
                  <Alu_card
                    key={alumnus._id}
                    img={alumnus.picture}
                    name={alumnus.name}
                    post={alumnus.position}
                    more={alumnus.link}
                    com={alumnus.company}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alum;
