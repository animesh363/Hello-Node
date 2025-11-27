const http = require('http'); //require ahttp module
const fs = require('fs');

const _ = require('lodash')

const server =  http.createServer((req, res) =>{
    const num = _.random(10, 100)
    console.log( "Random number is : " + num)
    const greet = _.once(() =>{
        console.log("Hello, Good Morning")
    })
    greet();
    greet();// Now it will not work due to once

    console.log(req.url , req.method); //This will show which method we are using



        //setting header and content type
    // res.setHeader('content-type' , 'text/plain'); //For plain text
    res.setHeader('content-type' , 'text/html');    //For html format

    //sending an html file
    var path = './';


    //we are making a routing system so we can call indivisual page as well
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-blah':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
            
        default:
            path += '404.html';
            res.statusCode = 404;
            break;

    }
    fs.readFile(path, (err, data) => {
        if(err){
            console.log("error");
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

    // res.write("Hello Duniya... \nHow are you all") //For plain text
    // res.write('<h1>Hello Duniya..</h1>')    //For html format
    // res.write('<p> Kaie ho aaplog </p>')
    // res.end();
     
})

server.listen(3000, 'localhost', () => {
    console.log("Listening for request on port 3000");
})