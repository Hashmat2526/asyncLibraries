var async = require("async");
var express = require("express");
var lodash = require("lodash");
const app = express();

var addEntryToDB = function(id, callback) {
  // pass something to first param if it errors out
  callback(null, {
    entryId: id,
    name: "username" + id
  });
};

//times(n,iterator,[callback])
async.times(
  5,
  function(n, next) {
    addEntryToDB(n, function(err, entry) {
      //   if (n === 3) {
      //     err = "Something bad happened";
      //   }
      next(err, entry);
    });
  },
  function(err, entries) {
    if (err) {
      console.log(err);
    }
    console.log(entries);
  }
);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
