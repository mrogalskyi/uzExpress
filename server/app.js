var express = require('express')
var request = require('request');
var app = express()

app.use(express.static('dist'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});

app.get('/tickets', function (req, res) {
  var date = req.query['date'];
  var sessId = req.query['sessId'];
  var gvToken = req.query['gvToken'];
  var headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.5',
    //'Content-Length': 263,
    'Origin': 'http://booking.uz.gov.ua',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': '_gv_lang=uk; _gv_sessid='+sessId+'; HTTPSERVERID=server1; __utma=31515437.1867219519.1471021841.1480359405.1480361575.3; __utmb=31515437.1.10.1480361575; __utmc=31515437; __utmz=31515437.1480361575.3.3.utmcsr=uz.gov.ua|utmccn=(referral)|utmcmd=referral|utmcct=/',
    'Content-Type': 'application/x-www-form-urlencoded',
    'GV-Ajax': '1',
    'GV-Referer': 'http://booking.uz.gov.ua/',
    'GV-Screen': '1680x1050',
    'GV-Token': gvToken,
    'Host': 'booking.uz.gov.ua',
    'Referer': 'http://booking.uz.gov.ua/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',

  }

  // Configure the request
  var options = {
    url: 'http://booking.uz.gov.ua/purchase/search/',
    method: 'POST',
    headers: headers,
    form: { station_id_from:2200001,
      station_id_till:2200184,
      date_dep: date,
      time_dep:"00:00",
      time_dep_till:"",
      station_from:'Київ',
      station_till:'Кривин',
      another_ec:0,
      search:"" }
  }

  // Start the request
  request(options, function (error, response, body) {
    //console.log(error);
    //console.log(response.request.body);
    //console.log(body);
    if (!error && response.statusCode == 200) {
      // Print out the response body
      
      res.send(body);
    } else {
      console.log(response);
      return response;
    }
  })
  //res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
