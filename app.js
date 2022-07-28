// Import NPM Packages
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportLocal = require("passport-local");
const expressSession = require("express-session");
const methodOverride = require("method-override");

// Local Imports
const connectDB = require('./config/connectDB')
const User = require('./models/User')

// Load Config Variables
dotenv.config({ path: "./config/config.env" });

//Express Config
const app = express();

// Statics
app.use(express.static("public"));

// Body Parser Config
app.use(bodyParser.urlencoded({ extended: true }));

// Method Override
app.use(methodOverride("_method"));

// Session config
app.use(
  expressSession({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
const LocalStrategy = passportLocal.Strategy;
passport.use(new LocalStrategy(User.authenticate()));

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

// Connect to DB
connectDB();

// Route Imports
const homePageRoutes = require("./routes/home_page_routes");
const adminRoutes = require('./routes/admin_pages_routes');
const userRoutes = require('./routes/user_routes')
const clientApplicationRoutes = require('./routes/application_routes')

// Use Routes
app.use("/", homePageRoutes);
app.use('/dashboard', adminRoutes)
app.use('/users', userRoutes)
app.use('/applications', clientApplicationRoutes)

// Run App
app.listen(PORT, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
