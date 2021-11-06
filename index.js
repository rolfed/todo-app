const http = require('http');

const hostname = '127.0.0.1';

const port = 30000;

const server = http.createServer((request, response) => {
   let responsText = 'Hello World';

   response.statusCode = 200;
   response.setHeader('Content-Type', 'application/json');

     if (request.url === '/todo' && request.method === 'GET') {
        responsText = 'Todo';
    }

   response.write(responsText);
   response.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

