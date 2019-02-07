const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const sanitizeHtml = require('sanitize-html');
const template = require('../lib/template.js');
const cookie = require('cookie');

router.get('/login', function(request, response){
  var title = 'login';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
      `<form action="login_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="password" placeholder="password"></p>
        <p><input type="submit"></p>
      </form>`,
      `<a href="/topic/create">create</a>`
    ,'');
  response.send(html);
});

router.post('/login_process', function(request, response){
    var post = request.body;
    if(post.email === 'test@naver.com' && post.password === '1111') {
        response.writeHead(302, {
          "Set-Cookie" : [
            `email=${post.email}; Path=/`,
            `password=${post.password}; Path=/`,
            `nickname=whos; Path=/`
          ]
          ,Location:'/'}
        );
    }
    response.end();
});

module.exports = router;
