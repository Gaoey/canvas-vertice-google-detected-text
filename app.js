import express from 'express'
import path from 'path'

const app = express();
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/bundle.js',function(req,res){
  res.sendFile(path.join(__dirname + '/bundle.js')); 
});

app.listen(8080);