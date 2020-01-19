const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

const routes = require("./routes");

const server = express();

mongoose.connect(process.env.MONGODB_URL_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

server
  .use(express.json())
  .use(cors())
  .use("/api", routes);

server.listen(3333);
