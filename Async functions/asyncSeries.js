var async = require("async");
var express = require("express");
const app = express();

async.series(
  [
    function functionOne(callback) {
      callback(null, "Result of function one");
    },
    function functionTwo(callback) {
      callback(null, "Result of function Two");
    },
    function functionThree(callback) {
      callback(null, "result of function three");
    }
  ],
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res);
    }
  }
);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
