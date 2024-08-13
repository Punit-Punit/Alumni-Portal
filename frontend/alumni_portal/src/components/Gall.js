import React, { useState, useEffect } from "react";
import Gal_img from "./GallImg";

const Gall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nits-ian.onrender.com/alumni/gallery"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <div className="grid border-2 border-slate-100 shadow-xl p-5  rounded-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Gal_img img={item.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gall;
