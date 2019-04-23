var async = require("async");
var express = require("express");
var GithubApi = require("github");
const app = express();

var github = new GithubApi({
  version: "3.0.0"
});

async.waterfall(
  [
    function getUserAvatar(callback) {
      github.search.users({ q: "airbnb" }, function(err, res) {
        if (err) {
          callback(err, null);
        }
        var avatarUrl = res.data.items[0].avatar_url;
        callback(null, avatarUrl);
      });
    },
    function wrapAvatarInHtml(avatarUrl, callback) {
      var avatarWithHtml = "<img src=' + avatarUrl + '/>";
      callback(null, avatarWithHtml);
    }
  ],
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  }
);

const PORT = 3000;
app.listen(PORT, function() {
  console.log("server is runing on ", PORT);
});
