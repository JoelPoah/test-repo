var express = require('express');
// var serveStatic = require('serve-static');
var app = express();
var port=3000;
var hostname="localhost";

app.use(function(req, res, next) {//create our custom middleware
    console.log(`Url received ${req.url}`);
    console.log(`Method received ${req.method}`)
    console.log(`Path recieved ${req.path}`);    
    console.log(`Query received ${req.query.id}`);
    console.log(`Query received ${req.query.title}`);
    console.log(`Query received ${req.query.duration}`);
dw

    res.status(200);
    res.type(".html");
    // next();
    res.end("<html><body><h1>Using response object!!</h1></body></html>");
    //res.redirect("https://www.sp.edu.sg");//comment out if we just want to redirect

    //next();//since we are setting the whole response data, do not pass to the next middleware


  });

// app.use(serveStatic(__dirname + '/public')); 
    //apply middleware with app.use ^^^^

app.use(express.static('public')); //apply middleware with app.use
app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
  });


  
