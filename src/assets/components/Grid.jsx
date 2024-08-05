import React, { useState } from "react";
import { movies } from "../data/data.js";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Hero = () => {
  const [shade, setShade] = useState(Array(movies.length).fill(false));
  const [num, setnum] = useState(0);
  const handleMouseEnter = (index) => {
    if (!shade[index]) {
      const updatedShade = [...shade];
      updatedShade.fill(false);
      updatedShade[index] = true;
      setShade(updatedShade);
    }
  };

  const handleMouseLeave = (index) => {
    if (shade[index]) {
      const updatedShade = [...shade];
      updatedShade[index] = false;
      setShade(updatedShade);
    }
  };

  return (
    <div>
      <div className="pt-10 pl-44 bg-black text-red-400">
        <h1 className="text-4xl font-bold ">Recommended Movies</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-40 py-10 bg-black ">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="shadow-xl relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={movie.imageLink}
                alt={movie.title}
                className="p-5 h-[400px] w-[300px]"
              />
              {shade[index] && (
                <div className="bg-black bg-opacity-50 absolute top-0 left-0 h-full w-full ">
                  <div className="text-white p-10">
                    <h1 className=" text-2xl font-bold">{movie.title}</h1>
                    <p>{movie.genre}</p>
                    <p>{movie.duration}</p>
                    <p className="bg-gray-200 text-black px-1 inline-block mx-1 my-1 rounded-sm">
                      {movie.rating}
                    </p>
                    <br />
                    <br />
                    <button className="bg-red-400 rounded-3xl p-2 ">
                      <NavLink key={movie} to={`/MovieDetails/${movie.title}`}>
                        Book Ticket
                      </NavLink>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
