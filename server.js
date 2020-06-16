// console.log('Hello World');
//======================
// dependencies
//======================
const express = require('express')
const app = express()

// mongoose
const mongoose = require('mongoose')

//======================
// use
//======================
app.use(express.json())
app.use(express.static('public'))

//======================
// middleware
//======================
const orgsController = require('./controllers/organizations.js')

// use
app.use('/resources', orgsController)

//======================
// mongoose connect
//======================
mongoose.connect('mongodb://localhost:27017/resources',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  mongoose.connection.once('open', () => {
      console.log('Mongod connection established.');
  });

//======================
// listener
//======================
app.listen(3000, () => {
  console.log('Started listening.');
})
