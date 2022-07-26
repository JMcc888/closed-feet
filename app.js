// Import NPM Packages
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Local Imports

// Load Config Variables
dotenv.config({ path: "./config/config.env" });

//Express Config
const app = express();

// Statics
app.use(express.static("public"));

// Body Parser Config
app.use(bodyParser.urlencoded({ extended: true }));

// Method Overried
app.use(methodOverride("_method"));

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

// Connect to DB

// Route Imports
const homePageRoutes = require("./routes/home_page_routes");

// Use Routes
app.use("/", homePageRoutes);

// Run App
app.listen(PORT, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
