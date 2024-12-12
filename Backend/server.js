const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config()

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(URL)
    .then(() => console.log("Mongodb Connection success!"))
    .catch((err) => console.error("Mongodb connection error:", err));

const userRouter = require("./routes/hotels");
const userroom = require("./routes/rooms");

app.use("/hotel", userRouter);
app.use("/room", userroom);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});