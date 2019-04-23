var async = require("async");
var express = require("express");
const app = express();

var stack = [];

var functionOne = function(callback) {
  // perform some action
  callback(null, "first function result");
  // callback("error generated",null)
};
var functionTwo = function(callback) {
  // perform some action
  callback(null, "second function result");
};
var functionThree = function(callback) {
  // perform some action
  callback(null, "third function result");
};

// console.log(functionOne);

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

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
