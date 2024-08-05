import React from "react";
import { useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const { bookdate, bookcity, booktheatre, booktime, movie, count } =
    location.state;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-700">
      {/* Navbar */}
      <nav className="bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-white font-bold text-xl">
                Movie Tickets
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="nav-link">
                  Home
                </a>
                <a href="#" className="nav-link">
                  Movies
                </a>
                <a href="#" className="nav-link">
                  Theaters
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Ticket Container */}
      <div className="flex items-center justify-center py-12">
        <div className="relative max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Ticket Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-lg" />

          {/* Crumpled Ends */}
          <div className="absolute left-0 top-0 h-full w-20 bg-white/60" />
          <div className="absolute right-0 top-0 h-full w-20 bg-white/60" />

          {/* Ticket Content */}
          <div className="relative p-12 grid grid-cols-2 gap-8 text-black font-serif">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <img
                  alt="Movie Ticket"
                  className="rounded-full border-4 border-white"
                  height="72"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "72/72",
                    objectFit: "cover",
                  }}
                  width="72"
                />
                <div className="grid gap-1 text-lg">
                  <h1 className="font-bold text-2xl">Movie Ticket</h1>
                  <p className="text-black/80">movietickets.com</p>
                </div>
              </div>
              <h1 className="font-bold text-4xl leading-none mb-4 text-center">
                Confirmation
              </h1>
              <p className="text-black/80 text-lg mb-8 text-center">
                Please present this at the entrance.
              </p>
              <div className="grid gap-2 mb-8">
                <h2 className="font-bold text-3xl text-center">{movie}</h2>
                <p className="text-black/80 text-lg text-center">
                  {bookdate} at {booktime}
                </p>
              </div>
              <div className="grid gap-2 mb-8">
                <h2 className="font-bold text-3xl text-center">
                  {booktheatre}
                </h2>
                <p className="text-black/80 text-lg text-center">{bookcity}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center text-center mb-8">
                <h2 className="font-bold text-3xl">{count} Tickets</h2>
                <p className="text-black/80 text-base">Seats</p>
              </div>
              <div className="grid gap-2 mb-8">
                <h2 className="font-bold text-3xl text-center">Jane Doe</h2>
                <p className="text-black/80 text-lg text-center">
                  jane@example.com
                </p>
              </div>
              <div className="grid gap-2">
                <h2 className="font-bold text-3xl text-center">
                  Order: 456789123
                </h2>
                <p className="text-black/80 text-lg text-center">
                  Transaction: 987654321
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
