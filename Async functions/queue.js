var async = require("async");
var express = require("express");
var lodash = require("lodash");
const app = express();

// var tasksList = lodash.times(10, lodash.uniqueId.bind(null, "task_")); //generate 10 elements array
var tasksList = ["task1", "task2", "task3", "task4", "task5", "task6", "task7"];
var tasksQueue = async.queue(function(task, callback) {
  console.log("task", task);
  console.log("Performing task: " + task.name);
  console.log("waiting to be processed: ", tasksQueue.length());
  console.log("---------------");

  setTimeout(function() {
    // if you want to pass an error object here , it will be caught in the task handler
    //callback('something went wrong)"
    callback();
  }, 1000);
}, 1);

// When all is processed, drain is called

tasksQueue.drain = function() {
  console.log("all items have been processed");
};

lodash.each(tasksList, function(task) {
  tasksQueue.push({ name: task }, function(error) {
    if (error) {
      console.error(error);
    }
  });
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
