import React, { useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { useNavigate } from "react-router-dom";

const Availablity = ({ bookdate, bookcity, booktheatre, booktime, movie }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [seats, setSeats] = useState(0);

  const bookfunction = () => {
    putcount();
    const bookingData = {
      bookdate: bookdate,
      bookcity: bookcity,
      booktheatre: booktheatre,
      booktime: booktime,
      movie: movie,
      count: count,
    };
    navigate("/Confirmation", {
      state: bookingData,
    });
  };

  const putcount = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          count,
          bookcity,
          booktheatre,
          bookdate,
          booktime,
          movie,
        }),
      };

      const response = await fetch(
        "http://localhost:3000/seatupdate",
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok! ${response.status}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookcity,
            booktheatre,
            bookdate,
            booktime,
            movie,
          }),
        };

        const response = await fetch(
          "http://localhost:3000/seats",
          requestOptions
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok! ${response.status}`);
        }
        const data = await response.json();
        setSeats(data[0].no_of_seats);
      } catch (e) {
        console.log(e);
      }
    };
    fetchSeats();
  }, [bookcity, booktheatre, bookdate, booktime, movie]);

  return (
    <div className="flex gap-3 justify-between ">
      <Card className="w-1/2 ">
        <CardContent className="p-4">
          <div>
            <div className="mt-2  text-gray-600 dark:text-gray-400 font-bold text-lg ">
              Available
              <br />
              <span className="text-3xl font-bold ">Seats: {seats}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {seats > 0 ? (
        <Card className="w-1/2">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mt-3">
              <label
                className=" text-gray-600 text-xl font-bold"
                htmlFor="seats"
              >
                Number of Seats:
              </label>
              <button onClick={() => setCount(count + 1)}>
                <AddBoxOutlinedIcon className="h-4 w-4" />
              </button>
              <div className="font-semibold w-8 text-center">{count}</div>
              <button
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                <IndeterminateCheckBoxOutlinedIcon className="h-4 w-4" />
              </button>
              <button
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-lg p-3 text-white font-bold"
                onClick={bookfunction}
              >
                Book
              </button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-1/2">
          <CardContent className="p-4 ">
            <div className="text-center text-red-600 text-xl font-bold mt-6">
              Sorry, we are booked out
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Availablity;
