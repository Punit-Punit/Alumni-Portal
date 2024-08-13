const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();
require("./Config/config.js");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));
const UserRoutes = require("./Routes/AlumniRoutes.js");
const PORT = process.env.PORT || 8001;
app.use("/alumni", UserRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
});
