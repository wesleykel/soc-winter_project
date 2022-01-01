import express from 'express';



const app = express();


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render("index");
 
});

export default app;
