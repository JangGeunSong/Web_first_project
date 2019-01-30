const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');

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
    );
  response.send(html);
});

module.exports = router;
