const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    let filePath = request.url.includes('.') ? request.url : `${request.url === '/' ? '/' : request.url + '/'}index.html`;
    if (filePath.includes('assets')) {
        filePath = `${process.cwd()}${filePath}`
        console.log(filePath)
    } else {
        filePath = `${process.cwd()}/src${filePath}`;
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', '*');
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
    fs.readFile(filePath, (err, result) => {
        if (err != null) {
            response.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            console.error(err);
            response.end('<h2>404</h2>')
            return
        }
        if(filePath.includes('svg')){
            response.writeHead(200,{
                'content-type': 'i' +
                    'mage/svg+xml;charset=utf8'
            })
        }
        response.end(result)
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
