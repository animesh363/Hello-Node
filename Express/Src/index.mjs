import express from 'express'

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(request, responce)=>{
    // responce.send("<h1>Hello, Duniyan!</h1>");
    responce.status(201).send("<h1>Hello, Duniyan! with statuss code</h1>"); // It will show statuss code as well in the console network tab

    // responce.send("Hello, Duniyan!");  
    // responce.send({msg: "hello"}); //The server can send only one response per request.
})

app.listen(PORT, ()=>{
    console.log(`Running on the port ${PORT}`);
})