const http = require('http');

// we need to put the argument as request and response
const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if (req.url ==='/about') {
        res.end('Here is our short history')
    }
    else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
    
})

// we also need to specify which port our server will be listening to
server.listen(5001)