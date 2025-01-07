const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();

const user = require("./routes/users");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:5173"}));

app.use("/api/users", user);

app.use(notFound)
app.use(errorHandler)

connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT || 5000, () =>
      console.log(`server running on port ${process.env.PORT}`)
    )
  )
  .catch((error) => {
    console.log(error);
  });
