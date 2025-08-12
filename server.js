const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./app/config/database");

dotenv.config();
const app = express();
app.use(express.json());

// 🔹 Import Routes
const authRouter = require("./app/routes/userRoutes");
const courseRouter = require("./app/routes/courseRoutes");
const assignmentRouter = require("./app/routes/assignmentRoutes");
const aiRouter = require("./app/routes/aiRoute");

// 🔹 Mount Routes according to API spec
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/ai", aiRouter);

// 🔹 Error Handler Middleware (should be last)
const errorHandler = require('./app/middleware/errorMiddleware');
app.use(errorHandler);

// ⏳ Connect to DB before starting the server
connectDB().then(() => {
  app.listen(3000, () => {
    console.log("✅ Server is running on port 3000");
  });
});
