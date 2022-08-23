const express= require('express')
const router= express.Router()

const customerController= require('../controllers/customerController.js')

router.get('/', customerController.list)

module.exports= router