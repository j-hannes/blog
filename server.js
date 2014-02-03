var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));
app.use(express.bodyParser());

app.post('/post', function(req, res) {
  res.send(200, {'text': req.body.text});
});

app.listen(8080, function() {
  console.log('listening on port 3000');
});
