var async = require("async");
var express = require("express");
const app = express();
var lodash = require("lodash");

var taskList = lodash.times(10, lodash.uniqueId.bind(null, "task_"));

// cargo(worker, payload)
var tasksCargo = async.cargo(function(tasks, callback) {
  for (var i = 0; i < tasks.length; i++) {
    console.log("working on " + tasks[i].name);
  }

  callback();
}, 3);

lodash.each(taskList, function(task) {
  tasksCargo.push({ name: task }, function(err) {
    if (err) {
      console.log(err);
      return;
    }

    // All good
    console.log("Task " + task + "is done");
  });
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
