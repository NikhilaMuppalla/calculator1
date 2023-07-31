const http = require('http');

const port = 3000; // Replace 3000 with the desired port number

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});