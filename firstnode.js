var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use('/asserts',express.static('asserts'));


app.get('/',function(req,res){
  res.render('main');
});

app.listen(1200);
