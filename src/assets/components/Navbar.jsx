import React from "react";
import { NavLink } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import { useState } from "react";
import { movies } from "../data/data.js";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <div className="max-w-[1680px] m-auto px-5 py-1 bg-black flex justify-between font-bold ">
      {/* logo and search */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div>
          <h1 className="text-red-400 px-5 pt-2 text-4xl">Show</h1>
          <pre>
            <h1 className="text-red-400 px-5 pb-2 text-4xl"> Time</h1>
          </pre>
        </div>
        {/* searchbar */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-black rounded-md p-2 border-2 border-white"
        >
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            className="bg-transparent text-white border-none outline-none flex-grow px-2 "
          />
          <button type="submit" className="text-white">
            <SearchIcon />
          </button>
        </form>
      </div>
      {/* login and register */}
      <div className="flex justify-center items-center pr-10">
        <NavLink to="/Login" className="text-red-400 p-5 text-xl">
          Login
        </NavLink>
        <NavLink to="/Signup" className="text-red-400 p-5 text-xl">
          Sign up
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
