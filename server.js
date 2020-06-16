// console.log('Hello World');
//======================
// dependencies
//======================

const express = require('express')
const app = express()

// mongoose

//======================
// use
//======================


//======================
// middleware
//======================


// use


//======================
// mongoose connect
//======================


//======================
// listener
//======================

app.listen(3000, () => {
  console.log('Started listening.');
})

//======================
// routes
//======================

app.get('/', (req, res) => {
  res.send('Hello World')
})
