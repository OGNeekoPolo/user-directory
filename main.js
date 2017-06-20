const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');
const userInfo = require('./public/36d3402e-data.js');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.use('/public', express.static('public'));

app.get('/', function(req, res){
  res.render('userpage', userInfo);
});

app.get('/users/:id', function(req, res){
  let id = req.params.id;
  let users = userInfo.users;
  let user = users[id];
  res.render('userprofile', user)
});

app.listen(3000, function(){
  console.log("Initializing Database!");
});
