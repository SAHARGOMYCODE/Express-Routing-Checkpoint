const express = require("express");
const app = express();

const Time = require("./Middleware/Time");

app.use(express.json());

const PORT = 7000;
app.use(Time);
app.use(express.static("public"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`the server is running ${PORT}...`);
});
