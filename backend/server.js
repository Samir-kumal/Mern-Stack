const express = require("express");
require("dotenv").config();
const colors = require("colors")
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/database")
const port = 5000;
connectDB();
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started in port ${port} `);
});
