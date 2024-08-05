import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Component() {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details); // You can replace this with your own logic
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md rounded-lg shadow-lg bg-white p-8 space-y-6 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <p className="text-gray-600 text-center text-sm">
          By logging in, you accept our{" "}
          <NavLink className="text-blue-500 hover:underline" to="#">
            terms
          </NavLink>{" "}
          and{" "}
          <NavLink className="text-blue-500 hover:underline" to="#">
            privacy policy
          </NavLink>
          .
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              required
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
