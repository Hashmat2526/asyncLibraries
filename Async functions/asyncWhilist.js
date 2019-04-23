var async = require("async");
var express = require("express");
const app = express();

var counter = 0;

async.whilst(
  function testCondition() {
    return counter < 5;
  },
  function increaseCounter(callback) {
    counter++;
    console.log("counter is now ", counter);

    setTimeout(callback, 1000);
  },
  function callback(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Job complete");
  }
);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
