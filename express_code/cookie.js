var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response){
  var cookies = {};
  if(request.headers.cookie !== undefined){
    cookies = cookie.parse(request.headers.cookie);
  }
  console.log(cookies.yummy_cookie);

  response.writeHead(200, {
    'Set-Cookie' : ['yummy_cookie=choco', 'tasty-cookie=strawberry']
  });

  response.end('cookie!!')
}).listen(3000);
