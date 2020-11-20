const moment = require("moment");
const beginTime = moment("9:00 am", "HH:mm a");
const endTime = moment("17:00 am", "HH:mm a");
const startingDay = 1;
const endingDay = 5;
console.log(moment);
const Time = (req, res, next) => {
  let currentTime = moment();
  let currentDay = moment().day();
  if (
    currentTime.isBetween(beginTime, endTime) &&
    currentDay >= startingDay &&
    currentDay <= endingDay
  ) {
    next();
  } else {
    console.log("ce n'est pas le moment de se connecter ");
    res.status(404).send("nous sommes fermés");
  }
};
module.exports = Time;
