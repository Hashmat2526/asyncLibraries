var async = require("async");
var express = require("express");
const app = express();

// add 5 to num
function addFive(num, callback) {
  callback(null, num + 5);
}

// multiplies num by 10
function timesTen(num, callback) {
  callback(null, num * 10);
}

//Compose calculate(addFive(timesTen(5)))
var calculate = async.compose(
  addFive,
  timesTen
);

// var calculate = async.seq(addFive, timesTen);
calculate(5, function(err, result) {
  console.log(result);
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
