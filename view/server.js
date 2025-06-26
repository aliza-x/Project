const express = require('express')
const mongoose = require('mongoose')
const routerr= require('../routes/productRoutes')
const DB= ''

const app = express();
app.use(express.json())
app.use('/api/products', routerr)


mongoose.connect(DB).then(() => {
    console.log("DB connected");
  });
  
  const port = 7860;
  app.listen(port, () => {
    console.log('app running');
  });
  
