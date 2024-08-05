import React, { useState } from "react";

const Signup = () => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details); // You can replace this with your own logic
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Create an Account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              id="fullName"
              placeholder="John Doe"
              required
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              id="email"
              placeholder="johndoe@example.com"
              required
              type="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              id="password"
              required
              type="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              id="confirmPassword"
              required
              type="password"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                id="terms"
                required
                type="checkbox"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                className="font-medium text-gray-700 dark:text-gray-300"
                htmlFor="terms"
              >
                I agree to the
                <a
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  href="#"
                >
                  terms and conditions
                </a>
              </label>
            </div>
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
