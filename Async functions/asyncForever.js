var async = require("async");
var express = require("express");
var lodash = require("lodash");
const app = express();

var targetNumber = 0;

async.forever(
  function checkIfDone(next) {
    targetNumber++;

    if (targetNumber === 5000) {
      next("target number reached ... stop forever");
    } else {
      console.log("increasing targetNumber", targetNumber);
      next();
    }
  },
  function finished(err) {
    if (err) {
      console.log(err);
    }
  }
);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
