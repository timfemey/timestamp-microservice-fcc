// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api",(req,res)=>{
  res.json({unix: new Date().getTime(Date.now()+3600000), utc: new Date().toUTCString(Date.now()+(3600000)) });
})





// your first API endpoint... 
app.get("/api/:date", function (req, res) {
   let date=req.params.date; 
     
  

    if(date.match(/\d{5,}/)){
    date=+date;
    } 

  
   let obj= new Date(date)
    if(isNaN(new Date(date).getTime())){
      res.json({ error : "Invalid Date" })
    }else{
      res.json({unix: obj.valueOf(),utc:obj.toUTCString() });
    }
  
  
});

/*
*/



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
