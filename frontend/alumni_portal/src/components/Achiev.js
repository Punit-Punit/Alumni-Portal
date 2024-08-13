import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "./data/data.json";
import Card from "./Card";

const Achiev = () => {
  const auth = localStorage.getItem("user");
  let link = "/signup";
  if (auth) {
    link = "/alumni";
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center m-4">
      <div className="w-full md:w-11/12 lg:w-10/12 xl:w-8/12">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-950 text-center mt-5 mb-8">
          Achievements
        </h1>
        <div className="flex justify-center border-2 border-slate-100 rounded-lg shadow-xl">
          <Slider className="m-3 w-full" {...settings}>
            {list.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                pos={item.post}
                link={item.link}
                name={item.name}
                more={item.more}
              />
            ))}
          </Slider>
        </div>
        <div className="flex justify-center mt-8">
          <a
            className="bg-[#003049] hover:bg-slate-50 border-[1px] border-blue-950 text-white hover:text-blue-950 py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-xl font-bold"
            href={link}
          >
            More Connections
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achiev;
