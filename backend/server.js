const express = require("express");
const cors = require("cors");
const CustomerRoutes = require("./customer/routes");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/", CustomerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
