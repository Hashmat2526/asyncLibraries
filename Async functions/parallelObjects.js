var async = require("async");
var express = require("express");
const app = express();

var stack = {};

stack.getUserName = function(callback) {
  let userName = "Bob";
  callback(null, userName);
  // callback("error generated",null)
};
stack.getAge = function(callback) {
  let userAge = 122;
  //   callback("error in age", null);
  callback(null, userAge);
};
stack.getGender = function(callback) {
  let userGender = "Male";
  callback(null, userGender);
};

async.parallel(stack, function(err, result) {
  if (err) {
    console.error(err);
  }
  console.log(result);
});
const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
