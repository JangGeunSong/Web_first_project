var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
//===> dynamic web server implementation

http.createServer(function(request, response){
  console.log(request.url);
  var addr = request.url;
  var data = url.parse(addr, true).query;
  var pathname = url.parse(addr, true).pathname;
  var id = data.id;
  console.log(id);
  console.log(data);
  console.log(pathname);
  if(pathname === '/') {
    if(id === undefined) {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end('hello my web');
    }
    else {

    }
  }
  else if(pathname === '/About') {
    if(id === 'Intro') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else if(id === 'Who') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else if(id === 'career') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('404 Not Found!');
    }
  }
  else if(pathname === '/Astronomy') {
    if(id === 'Intro') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else if(id === 'Stars') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else if(id === 'Galaxies') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('404 Not Found!');
    }
  }
  else if(pathname === '/computer') {
    if(id === 'Intro') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else if(id === 'C') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else if(id === 'Java') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else if(id === 'Web') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(`${id}`);
    }
    else {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('404 Not Found!');
    }
  }
  else {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('404 Not Found!');
  }
}).listen(8080);
