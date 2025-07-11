// app.js

// Import the Express framework to build the backend server
import express from "express";
import { Constant } from "./utils/constant.js";
import { errorHandler } from "./middleware/errorHandler.js";


// Create an instance of the Express application
const app = express();

// Define the port the server will run on
const port = Constant.PORT;

// Middleware: Parses incoming requests with JSON payloads
// This allows us to access data from req.body in POST and PUT requests
app.use(express.json());


// Routes Import here
import studentRoutes from "./routes/studentRoute.js"


// Default route to test if the server is running
// Visiting http://localhost:5000/ will return this message
app.get("/", (req, res) => {
  res.send("Welcome to the Student Management System API!");
});

// ==============================
// ✨ Routes Use here.
// ==============================


const API_VERSION = Constant.API_VERSION
// ✅ Add routes for managing students
app.use(`/api/v${API_VERSION}/students`, studentRoutes);


app.use(errorHandler);

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});








