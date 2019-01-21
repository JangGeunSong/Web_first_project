var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var qs = require('querystring');
//===> dynamic web server implementation

http.createServer(function(request, response){
  console.log(request.url);
  var addr = request.url;
  var data = url.parse(addr, true).query;
  var pathname = url.parse(addr, true).pathname;
  var id = data.id;
  var description = `<h1>this is my app example ${id} is selected!!</h1>`;
  console.log(id);
  console.log(data);
  console.log(pathname);
  if(pathname === '/') {
    if(id === undefined) {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else {

    }
  }
  else if(pathname === '/About') {
    if(id === 'Intro') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else if(id === 'Who') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else if(id === 'career') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('404 Not Found!');
    }
  }
  else if(pathname === '/Astronomy') {
    if(id === 'Intro') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else if(id === 'Stars') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else if(id === 'Galaxies') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('404 Not Found!');
    }
  }
  else if(pathname === '/Computer') {
    if(id === 'Intro') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else if(id === 'C') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else if(id === 'Java') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else if(id === 'Web') {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(baseTemplate(description));
    }
    else {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.end('404 Not Found!');
    }
  }
  else if(addr.match('\.css$')) {
    var cssPath = path.join(__dirname, '', request.url);
    var fileStream = fs.createReadStream(cssPath);
    response.writeHead(200, {'Content-Type' : 'text/css'});
    fileStream.pipe(response);
  }
  else if(addr.match('\.jpg$')) {
    var imagePath = path.join(__dirname, '', request.url);
    var fileStream = fs.createReadStream(imagePath);
    response.writeHead(200, {'Content-Type' : 'image/jpg'});
    fileStream.pipe(response);
  }
  else if(addr.match('\.js$')) {
    var jsPath = path.join(__dirname, '', request.url);
    var fileStream = fs.createReadStream(jsPath);
    response.writeHead(200, {'Content-Type' : 'text/javascript'});
    fileStream.pipe(response);
  }
  else {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('404 Not Found!');
  }
}).listen(8080);

function baseTemplate(description) {
  return `<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>home</title>
      <link rel = "stylesheet" href = "style.css">
      <script src="actionListener.js"></script>
    </head>
    <body>
      <div class="header">
        <h1>This is first page</h1>
      </div>
      <div class="body_box">
        <div class="left_side">
          <h3>explore my page</h3>
          <button class="collapsible">About</button>
          <div class="linkcontent">
            <a href="About?id=Intro">Intro</a>
            <a href="About?id=Who">Who</a>
            <a href="About?id=career">career</a>
          </div>
          <button class="collapsible">Astronomy</button>
          <div class="linkcontent">
            <a href="Astronomy?id=Intro">Intro</a>
            <a href="Astronomy?id=Stars">Stars</a>
            <a href="Astronomy?id=Galaxies">Galaxies</a>
          </div>
          <button class="collapsible">computer</button>
          <div class="linkcontent">
            <a href="Computer?id=Intro">Intro</a>
            <a href="Computer?id=C">C</a>
            <a href="Computer?id=Java">Java</a>
            <a href="Computer?id=Web">Web</a>
          </div><br><br><br>
        </div>
        <div class="right_side">
          ${description}
          <p>whole images that using on page</p>
          <div class="slideshow">

            <div class="slidecomp fade">
              <div class="slidenumber">1 / 2</div>
              <img src="back1.jpg" style="width:40%; height:40%;">
              <div class="text">image1</div>
            </div>

            <div class="slidecomp fade">
              <div class="slidenumber">2 / 2</div>
              <img src="back2.jpg" style="width:100%; height:100%;">
              <div class="text">image2</div>
            </div>

            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
          </div>
          <br>

          <div id="dotbundle" style="text-align:center;">
            <span id="dot"></span>
            <span id="dot"></span>
          </div>
        </div>
      </div>
      <div class="footer">
        <h2>Made By SongJanggeun ------- 01.14.2019</h2>
      </div>
    </body>
  </html>
`
}
