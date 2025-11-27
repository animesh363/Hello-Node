// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res)=>{
//     console.log(req.url, req.method);

//     res.setHeader('content-type', 'text/html')
//     var path = './servers/'

//     switch(req.url){
//         case '/':
//             path += 'index.html'
//             req.statusCode=200;
//             break;
//         case '/about':
//             path += 'about.html'
//             req.statusCode=200;
//             break;
//         case '/about-me':
//             path += 'about.html'
//             req.statusCode=301;
//             break;
//         default:
//             path += ''index.html''
//             req.statusCode=200;
//             break;
//     }




// })