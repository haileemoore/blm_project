const mongoose = require('mongoose')

const blmSchema = new mongoose.Schema({
  organization: String,
	website: String,
	donationMethod: String,
	bipocFounded: Boolean,
	lgbtqiaFounded: Boolean,
	missionStatement: String,
  donated: Boolean,
  donationAmount: Number
})

const Orgs = mongoose.model('Org', blmSchema)

module.exports = Orgs
