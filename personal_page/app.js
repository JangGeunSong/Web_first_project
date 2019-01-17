var http = require('http');
var fs = require('fs');
var path = require('path')

http.createServer(function (req, res) {
  console.log(req.url);
  var name = req.url;
  //req.url is string but req.url.match() method is not defined
  //so we need another objcet to use the match method data type as a
  //string
  if(req.url === '/') {
    fs.readFile('main_page.html', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if(name.match('\.css$')) {
    var cssPath = path.join(__dirname, '', req.url);
    var fileStream = fs.createReadStream(cssPath);
    res.writeHead(200, {'Content-Type' : 'text/css'});
    fileStream.pipe(res);
  }
  else if(name.match('\.jpg$')) {
    var imagePath = path.join(__dirname, '', req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, {'Content-Type' : 'image/jpg'});
    fileStream.pipe(res);
  }
  else if(name.match('\.js$')) {
    var jsPath = path.join(__dirname, '', req.url);
    var fileStream = fs.createReadStream(jsPath);
    res.writeHead(200, {'Content-Type' : 'text/javascript'});
    fileStream.pipe(res);
  }
  else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    res.end('404 Not Found');
  }

}).listen(8080);
