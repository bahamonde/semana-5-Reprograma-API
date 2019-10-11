const express = require('express')
const router = express.Router()
const controller = require('../controllers/professorasController')

// router.get('/', function(req, res){
//     res.status(200).send(professoras)
// })


router.get('/', controller.get) //QUERY PARAMS É O :ID



module.exports = router