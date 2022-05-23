const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const connectDB = require("./db/connect");
require("dotenv").config();
const path = require("path");
const notFound = require("./middleware/not-found");
// var oAuth = require("./middleware/oAuth");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDatabase = require("./db/connect");

// Connecting to database
connectDatabase();

// middleware
// app.use(oAuth);
app.use(express.static("./public"));
app.use(express.json());
// routes
// User Authentication Route
app.use("/api/v1/user/", userRoute);

// ---------Deployment--------------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on PORT ${port}...`));
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
