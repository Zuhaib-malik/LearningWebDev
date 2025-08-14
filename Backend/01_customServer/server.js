const http = require('http');
const fs = require('fs');
const path = require('path');


const port = 4000;


const server = http.createServer((req , res) = () => {
    const pathname = path.join(__dirname, req.url === '/' ? 'index.html': 'req.url' )
    const extname = String(path.extname(pathname)).toLowerCase();

    const mimeType = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javaScript'
    }
   const contentType =  mimeType[extname] || 'application/octet-stream'
});

server.listen(port, ()=>{
    console.log(`server is listening on ${port} port number`);
    
})

// 26 min

