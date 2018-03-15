var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'esOjywPrjd16Exe4CzJDF5TWP',
  consumer_secret: 'JELBMmlyCEA20hROHwSBTc0Ss5iYxx35aLgSaNh51M3afTWafK',
  access_token_key: '764158348501590016-KfHJNdye75WbNelyGHSqkEl0LbDzgsf',
  access_token_secret: 'NZQt36g23dTfgTBf9ucRFQdTmiIngVKpCLzQ1zwv6S7sl'
});

app.use(express.static('public'))
app.get('/', function(req, res){
  var params = {screen_name: 'BarryStantonGB'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      var output = "";
      for (var t = 0; t < tweets.length; t++) {
        output += "<div>";
        output += "<h2>" + tweets[t].user.screen_name + "<h2>";
        output += "<p>" + tweets[t].text + "</p>"
        output += "</div>";
      }
      res.send(output);
    }
  });
});
app.listen(8080);
