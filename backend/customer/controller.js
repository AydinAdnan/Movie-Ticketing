const pool = require("../db");
const queries = require("./queries");

const getDate = (req, res) => {
  const { moviename } = req.params;
  pool.query(queries.getDateForMovie, [moviename], (error, results) => {
    if (error) {
      console.error("Error fetching dates:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(results.rows);
  });
};

const getCity = (req, res) => {
  pool.query(queries.getCityForMovie, (error, results) => {
    if (error) {
      console.error("Error fetching cities:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(results.rows);
  });
};

const getTheatre = (req, res) => {
  const { cityname } = req.params;
  pool.query(queries.getTheatreForMovie, [cityname], (error, results) => {
    if (error) {
      console.error("Error fetching theatres:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.status(200).json(results.rows);
  });
};

const getTime = (req, res) => {
  const { theatrename, moviename } = req.params;
  pool.query(
    queries.getTimeForMovie,
    [theatrename, moviename],
    (error, results) => {
      if (error) {
        console.error("Error fetching times:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getSeats = (req, res) => {
  //disp req.body

  const { bookcity, booktheatre, bookdate, booktime, movie } = req.body;

  pool.query(
    queries.getSeatsForMovie,
    [bookcity, booktheatre, bookdate, booktime, movie],
    (error, results) => {
      if (error) {
        console.error("Error fetching seats:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.status(200).json(results.rows);
    }
  );
};
const updateSeats = (req, res) => {
  const { count, bookcity, booktheatre, bookdate, booktime, movie } = req.body;
  pool.query(
    queries.updateSeatsForMovie,
    [count, bookcity, booktheatre, bookdate, booktime, movie],
    (error, results) => {
      if (error) {
        console.error("Error updating seats:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.status(200).json(results.rows);
    }
  );
};
module.exports = {
  getDate,
  getCity,
  getTheatre,
  getTime,
  getSeats,
  updateSeats,
};

// const getCustomerById = (req, res) => {
//   const id = req.params.id; /// no need to parde int
//   pool.query(queries.getCustomerById, [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(results.rows);
//   });
// };

// const addCustomer = (req, res) => {
//   const { customer_id, name, password, email, ph_no } = req.body;

//   pool.query(queries.checkCustomer, [customer_id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     if (results.rows.length > 0) {
//       res.status(201).send("Customer already exists");
//     }

//     pool.query(
//       queries.addCustomer,
//       [customer_id, name, password, email, ph_no],
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         res.status(201).send(`Customer added with ID: ${customer_id}`);
//       }
//     );
//   });
// };

// const deleteCustomerbyId = (req, res) => {
//   const id = req.params.id;
//   pool.query(queries.deleteCustomerbyId, [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     if (results.rows.length === 0) {
//       res.status(404).send("Customer not found");
//     }
//     res.status(200).send(`Customer deleted with ID: ${id}`);
//   });
// };

// const updateCustomerbyId = (req, res) => {
//   const id = req.params.id;
//   const { name, password, email, ph_no } = req.body;
//   pool.query(queries.getCustomerById, [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     if (results.rows.length === 0) {
//       res.status(404).send("Customer not found");
//     }
//     pool.query(
//       "UPDATE customer SET name = $1, password = $2, email = $3, ph_no = $4 WHERE customer_id = $5",
//       [name, password, email, ph_no, id],
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         res.status(200).send(`Customer modified with ID: ${id}`);
//       }
//     );
//   });
// };
