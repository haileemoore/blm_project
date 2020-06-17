const express = require('express')
const router = express.Router()

const Orgs = require('../models/schema.js')

//=========
// ROUTES
//=========

// POST
router.post('/', (req, res) => {
  Orgs.create(req.body, (err, createdOrg) => {
    res.json(createdOrg)
  })
})

// HELLO WORLD
// router.get('/', (req, res) => {
//   res.send('Hello, World!')
// })

// GET
router.get('/', (req, res) => {
  Orgs.find({}, (err, foundOrgs) => {
    res.json(foundOrgs)
  })
})

// DELETE
router.delete(':/id', (req, res) => {
  Orgs.findByIdAndRemove(req.params.id,
  (err, removedOrg) => {
    res.json(removedOrg)
  })
})

// PUT
router.put(':/id', (req, res) => {
  Orgs.findByIdAndUpdate(req.params.id,
  req.body, {new:true},
    (err, updatedOrg) => {
      res.json(updatedOrg)
    })
})

module.exports = router
