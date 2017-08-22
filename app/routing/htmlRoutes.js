var path = require("path");

//include paths in server and route to different pages
//in my export, i want to pass in parameter app (express)
//and when user hits url/survey, i want to deliver survey.html
//html route file is included in server.js
module.exports = function (app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

//if not on defined url, bring the user to home page
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  })
}
