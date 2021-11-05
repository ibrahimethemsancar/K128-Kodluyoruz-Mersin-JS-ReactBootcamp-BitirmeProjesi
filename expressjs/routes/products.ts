import express from 'express';
import pgPromise from 'pg-promise';
const router =express.Router();
const pgp=pgPromise({});
const app = express();
const port = 3001;
const dotenv = require('dotenv').config();
var db=pgp({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:5432,
    database:process.env.DB_DATABASE,
    ssl:{
      rejectUnauthorized:false
    }
  })


router.route("/")
.all((req,res,next)=>{
  console.log("Request detected ");
  next()
})



.get((req,res)=>{
  db.query('SELECT id,title,price,description,category,image,rate FROM "MY_PRODUCTS"')
.then(function (data) {
  res.send(data)
})
.catch(function (error) {
  res.send(error)
})
})
.post((req,res)=>{
  db.one('INSERT INTO "MY_PRODUCTS" (title,price,description,category,image,rate) VALUES($1,$2,$3,$4,$5,$6) RETURNING id', [req.body.title,req.body.price,req.body.description,req.body.category,req.body.image,req.body.rate],
  (event)=>event.id)
  .then((data)=>
      
      res.send(data)
      )
});


router.get('/:id',(req,res)=>{
    db.one('SELECT id,title,price,description,category,image,rate FROM "MY_PRODUCTS" WHERE id=$1',[req.params.id] )
.then(function (data) {
  res.send(data)
})
.catch(function (error) {
  res.sendStatus(404)
})
  });

router.delete('/:id',(req,res)=>{
    db.query('DELETE FROM "MY_PRODUCTS" WHERE id=$1',[req.params.id] )
.then(function (data) {
  res.send(data)
})
.catch(function (error) {
  res.sendStatus(404)
})
});
router.put('/:id',(req,res)=>{
    db.query('UPDATE "MY_PRODUCTS" SET title=$1, price=$2, description=$3, category=$4, image=$5, rate=$6   WHERE id=$7',
    [req.body.title,req.body.price, req.body.description,req.body.category,req.body.image,req.body.rate, req.params.id] )
.then(function (data) {
  res.send(data)
})
.catch(function (error) {
  res.sendStatus(404)
})
}) 

module.exports = router