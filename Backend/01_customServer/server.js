const http = require('http');
const fs = require('fs');
const path = require('path');


const port = 4000;


const server = http.createServer();

server.listen(port, ()=>{
    console.log(`server is listening on ${port} port number`);
    
})