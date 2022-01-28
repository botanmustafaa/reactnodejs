const http = require ('http');
const server = http.createServer((request, response) => {
    response.write("hello there, this is test one! ");
    response.end();
});

server.listen(8000);