const getDateForMovie =
  "SELECT DISTINCT (show_date + INTERVAL '1 day') as show_date FROM show WHERE movie_name = $1";

const getCityForMovie = "SELECT DISTINCT city FROM theatre";

const getTheatreForMovie =
  "SELECT DISTINCT theatre_name FROM theatre WHERE city = $1";

const getTimeForMovie =
  "SELECT DISTINCT timing FROM screen WHERE theatre_name = $1 AND movie_name = $2";

const getSeatsForMovie =
  "SELECT no_of_seats FROM seats WHERE city = $1 AND theatre_name = $2 AND show_date = $3 AND timing = $4 AND moviename = $5";

const updateSeatsForMovie =
  "UPDATE seats SET no_of_seats = ( no_of_seats - $1) WHERE city = $2 AND theatre_name = $3 AND show_date = $4 AND timing = $5 AND moviename = $6";
module.exports = {
  getDateForMovie,
  getCityForMovie,
  getTheatreForMovie,
  getTimeForMovie,
  getSeatsForMovie,
  updateSeatsForMovie,
};
// const getCustomerById = "SELECT * FROM customer WHERE customer_id = $1";
// const checkCustomer = "SELECT * FROM customer WHERE customer_id = $1";
// const addCustomer =
//   "INSERT INTO customer (customer_id, name, password, email, ph_no) VALUES ($1, $2, $3, $4, $5)";
// const deleteCustomerbyId = "DELETE FROM customer WHERE customer_id = $1";
// const updateCustomerbyId =
//   "UPDATE customer SET name = $1, password = $2, email = $3, ph_no = $4 WHERE customer_id = $5";
