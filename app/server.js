const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./app/config/database"); 

dotenv.config();

const app = express();
app.use(express.json());

const userRouter = require("./app/routes/userRoutes");
const assignmentRouter = require("./app/routes/assignmentRoutes");
const courseRouter = require("./app/routes/courseRoutes");
const aiRouter = require("./app/routes/aiRoute")


app.use("/api/v1/users", userRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/ai",aiRouter);


// ⏳ Connect to DB before starting the server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("✅ Server is running on port 3000");
  });
});

const errorHandler = require('./app/middleware/errorHandler');
app.use(errorHandler);

