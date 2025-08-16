const http = require('http');

const hostname = '127.0.0.1'; // Localhost
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n'); // Send response
    }else if(req.url === '/sec'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('theis is second response\n'); // Send response
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 not Found\n'); // Send response
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
