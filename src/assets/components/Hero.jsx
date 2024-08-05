import React, { useState, useEffect, useRef } from "react";
import { movies } from "../data/data.js";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const Hero = () => {
  const [num, setnum] = useState(0);
  const [play, setplay] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setnum((num) => (num + 1) % movies.length);
    }, 7000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const playfun = () => {
    window.open(movies[num].trailerLink, "_blank");
  };
  return (
    <div className="py-5 bg-gradient-to-t from-black to-black opacity-90">
      <div className="relative flex justify-center pt-5 pb-5 ">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${movies[num].imageLink})`,
            backgroundSize: "cover",
            filter: "blur(8px)",
            zIndex: "-2",
          }}
        ></div>
        <div
          className="w-[700px] flex shadow-xl rounded-lg overflow-hidden"
          style={{ zIndex: "0" }}
        >
          <div className="w-2/3 ">
            <img
              src={movies[num].imageLink}
              alt={movies[num].title}
              className="h-[500px] object-cover w-full"
            />
          </div>
          <div className="bg-black  w-1/3 p-6 text-white">
            <h1 className="font-bold text-2xl">{movies[num].title}</h1>
            <div className="flex items-center space-x-2  py-4">
              <div>
                <PlayCircleFilledWhiteIcon
                  style={{ fontSize: 50, color: "red" }}
                  className="cursor-pointer"
                  onClick={playfun}
                />
              </div>
              <p className="font-bold">Watch trailer</p>
            </div>
            <p>{movies[num].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
