const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  if (req.url === '/') {
    res.end('<h1>Welcome to Simple Node.js Web Server</h1><p>Server is running successfully!</p>');
  } else if (req.url === '/about') {
    res.end('<h1>About</h1><p>This is a simple Node.js web server created using the built-in http module.</p>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
