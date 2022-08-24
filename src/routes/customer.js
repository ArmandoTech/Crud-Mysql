const express= require('express')
const router= express.Router()

const customerController= require('../controllers/customerController.js')

router.get('/', customerController.read)
router.post('/add', customerController.save)
router.get('/delete/:id', customerController.delete)
router.get('/update/:id', customerController.selectUpdate)
router.post('/update/:id', customerController.saveUpdate)

module.exports= router