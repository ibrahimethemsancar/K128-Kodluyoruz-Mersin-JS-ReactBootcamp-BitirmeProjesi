import express from 'express';
import pgPromise from 'pg-promise';
const router =express.Router();
const pgp=pgPromise({});
const app = express();
const port = 3001;
const dotenv = require('dotenv').config();
const productsRouter = require('./routes/products')
const homeRouter = require('./routes/home')
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");
const cors=require('cors')
app.use(cors({
  origin:'*'
}))


app.listen(process.env.PORT  || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.use(express.json());
app.use("/",homeRouter);
app.use("/products",productsRouter);


var options = {
  explorer: true,
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);