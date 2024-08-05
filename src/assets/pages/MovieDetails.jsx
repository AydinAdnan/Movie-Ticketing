import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { movies } from "../data/data.js";
import Availablity from "../components/Availablity";

import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const MovieDetails = () => {
  const { moviename } = useParams();

  const movie = movies.find((movie) => movie.title === moviename);
  const [date, setDate] = useState([]);
  const [city, setCity] = useState([]);
  const [time, setTime] = useState([]);
  const [theatre, setTheatre] = useState([]);
  const [bookdate, setbookdate] = useState("");
  const [bookcity, setbookcity] = useState("");
  const [booktheatre, setbooktheatre] = useState("");
  const [booktime, setbooktime] = useState("");
  const [ticketchoice, setticketchoice] = useState("");
  const [decided, setDecided] = useState(false);
  const [notfilled, setNotfilled] = useState(false);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const res = await fetch(`http://localhost:3000/date/${movie.title}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const datesArray = data.map((item) => item.show_date.split("T")[0]);
        setDate(datesArray);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCity = async () => {
      try {
        const res = await fetch(`http://localhost:3000/city`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const cityArray = data.map((item) => item.city);
        setCity(cityArray);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTheatre = async () => {
      try {
        const res = await fetch(`http://localhost:3000/theatre/${bookcity}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const theatreArray = data.map((item) => item.theatre_name);
        setTheatre(theatreArray);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTime = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/time/${booktheatre},${movie.title}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        const timeArray = data.map((item) => item.timing);
        setTime(timeArray);
      } catch (error) {
        console.log(error);
      }
    };

    // sequence of call matters
    fetchDate();
    fetchCity();
    fetchTheatre();
    fetchTime();
  }, [movie.title, bookcity, booktheatre]);

  const Datesetter = (e) => {
    setbookdate(e.target.value);
  };

  const Citysetter = (e) => {
    setbookcity(e.target.value);
  };

  const TheatreSetter = (e) => {
    setbooktheatre(e.target.value);
  };

  const TimeSetter = (e) => {
    setbooktime(e.target.value);
  };

  const Costseter = (choice) => {
    setticketchoice(choice);
  };
  const handleAvailablity = () => {
    if (
      bookdate === "" ||
      bookcity === "" ||
      booktheatre === "" ||
      booktime === "" ||
      ticketchoice === ""
    ) {
      setNotfilled(true);
      return;
    }
    setNotfilled(false);
    setDecided(true);
  };
  return (
    <div className="bg-gradient-to-br from-gray-800 to-black text-white h-screen">
      <Navbar />
      <div className="px-4 py-9 ">
        <div className="mr-56 ml-9">
          <div className="grid gap-4 md:gap-8 col-span-2">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold leading-none">{movie.title}</h1>
            </div>

            <div className="flex justify-between  gap-11">
              {/* BOOKING */}
              <div>
                <Grid container spacing={2} className="mt-4 ">
                  {/* Date */}
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                      fullWidth
                      style={{ border: "1px solid gray", borderRadius: "4px" }}
                    >
                      <InputLabel id="date-select-label">
                        <span className="text-white ">Date</span>
                      </InputLabel>
                      <Select
                        labelId="date-select-label"
                        id="date-select"
                        value={bookdate} // Set value and onChange as needed
                        label="Date"
                        onChange={Datesetter}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              backgroundColor: "#454545", // Set the background color to black
                            },
                          },
                        }}
                      >
                        {date.map((item, index) => {
                          return (
                            <MenuItem
                              value={item}
                              key={index}
                              style={{ color: "blue" }}
                            >
                              <span className="text-white ">{item}</span>
                            </MenuItem>
                          );
                        })}

                        {/* Add options for dates */}
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* City */}
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                      fullWidth
                      style={{ border: "1px solid gray", borderRadius: "4px" }}
                    >
                      <InputLabel id="city-select-label">
                        <span className="text-white ">City</span>
                      </InputLabel>
                      <Select
                        labelId="city-select-label"
                        id="city-select"
                        value={bookcity} // Set value and onChange as needed
                        label="City"
                        onChange={Citysetter}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              backgroundColor: "#454545", // Set the background color to black
                            },
                          },
                        }}
                      >
                        {city.map((item, index) => {
                          return (
                            <MenuItem value={item} key={index}>
                              <span className="text-white ">{item}</span>
                            </MenuItem>
                          );
                        })}

                        {/* Add options for cities */}
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* Theater */}
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                      fullWidth
                      style={{ border: "1px solid gray", borderRadius: "4px" }}
                    >
                      <InputLabel id="theater-select-label">
                        <span className="text-white ">Theatre</span>
                      </InputLabel>
                      <Select
                        labelId="theater-select-label"
                        id="theater-select"
                        value={booktheatre} // Set value and onChange as needed
                        label="Theater"
                        onChange={TheatreSetter}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              backgroundColor: "#454545", // Set the background color to black
                            },
                          },
                        }}
                      >
                        {theatre.map((item, index) => {
                          return (
                            <MenuItem value={item} key={index}>
                              <span className="text-white ">{item}</span>
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* Time */}
                  <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                      fullWidth
                      style={{ border: "1px solid gray", borderRadius: "4px" }}
                    >
                      <InputLabel id="time-select-label">
                        <span className="text-white ">Time</span>
                      </InputLabel>
                      <Select
                        labelId="time-select-label"
                        id="time-select"
                        value={booktime} // Set value and onChange as needed
                        label="Time"
                        onChange={TimeSetter}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              backgroundColor: "#454545", // Set the background color to black
                            },
                          },
                        }}
                      >
                        {time.map((item, index) => {
                          return (
                            <MenuItem value={item} key={index}>
                              <span className="text-white ">{item}</span>
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                {/* Seat Selection */}
                <div className="flex items-center space-x-4 mt-4">
                  <Button
                    variant="outlined"
                    onClick={() => Costseter("VIP")}
                    style={{
                      borderColor: ticketchoice === "VIP" ? "black" : "gray",
                      borderWidth: ticketchoice === "VIP" ? "2px" : "1px",
                      backgroundColor: ticketchoice === "VIP" ? "white" : "",
                      // Change border color
                    }}
                  >
                    <EmojiEventsIcon className="mr-2 h-4 w-4 text-yellow-500" />
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-900">
                      VIP $500
                    </span>
                  </Button>
                  <Button
                    style={{
                      borderColor:
                        ticketchoice === "Premium" ? "black" : "gray",
                      borderWidth: ticketchoice === "Premium" ? "2px" : "1px",
                      backgroundColor:
                        ticketchoice === "Premium" ? "white " : "",
                    }}
                    variant="outlined"
                    onClick={() => Costseter("Premium")}
                  >
                    <StarIcon className="mr-2 h-4 w-4 text-[#a9b0b4]" />
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-600">
                      Premium $350
                    </span>
                  </Button>
                  <Button
                    style={{
                      borderColor:
                        ticketchoice === "Standard" ? "black" : "gray",
                      borderWidth: ticketchoice === "Standard" ? "2px" : "1px",
                      backgroundColor:
                        ticketchoice === "Standard" ? "white" : "",
                    }}
                    className={`border-gray-200 ${
                      ticketchoice === "Standard" ? "bg-blue-500" : ""
                    }`}
                    variant="outlined"
                    onClick={() => Costseter("Standard")}
                  >
                    <ConfirmationNumberIcon className="mr-2 h-4 w-4 text-[#CD7F32]" />
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#CD7F32] to-amber-950 ">
                      Standard $250
                    </span>
                  </Button>
                </div>
                {/* BOOK BUTTON */}
                {notfilled && (
                  <div className="text-red-500 mt-4">
                    Please fill all the fields
                  </div>
                )}
                <div>
                  <div className="grid gap-4 md:gap-8 mt-4">
                    <button
                      className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-lg p-3 text-white font-bold"
                      onClick={handleAvailablity}
                    >
                      Check Availablity
                    </button>
                  </div>
                </div>

                {decided && (
                  <div className="mt-4">
                    <Availablity
                      bookdate={bookdate}
                      bookcity={bookcity}
                      booktheatre={booktheatre}
                      booktime={booktime}
                      movie={movie.title}
                    />
                  </div>
                )}
              </div>
              {/* DETAILS */}
              <div>
                <div className="grid gap-4">
                  <h2 className="text-xl font-bold">Description</h2>
                  <p>{movie.description}</p>
                </div>
                <div className="grid gap-4 md:gap-8">
                  <h2 className="text-xl font-bold">Details</h2>
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-8 items-start">
                    <div className="grid gap-1">
                      <p className="text-sm text-muted">Duration</p>
                      <p>{movie.duration}</p>
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm text-muted">Language</p>
                      <p>English</p>
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm text-muted">Format</p>
                      <p>{movie.format}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
