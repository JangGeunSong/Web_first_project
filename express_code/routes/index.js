const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');
const cookie = require('cookie');

function authisOwner(request, response) {
  var isOwner = false;
  var cookies = {};
  if(request.headers.cookie){
    cookies = cookie.parse(request.headers.cookie);
  }
  if(cookies.email === 'test@naver.com' && cookies.password === '1111'){
    isOwner = true;
  }
  return isOwner;
}

function authStatusUI(request, response) {
  var authStatusUI = '<a href="/userlog/login">login</a>';
  if(authisOwner(request, response)) {
    authStatusUI = '<a href="/userlog/logout_process">logout</a>';
  }
  return authStatusUI;
}

//routing process implements
router.get('/', function (request, response) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <a href="/images/eunha 1920 1.jpg"><img src="images/eunha 1920 1.jpg" style="width:300px; display:block; margin-top:10px;"></a>
      `,
      `<a href="/topic/create">create</a>`
    ,authStatusUI(request, response));
  response.send(html);
});

module.exports = router;
