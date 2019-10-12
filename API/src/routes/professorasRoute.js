const express = require('express')
const router = express.Router()
const controller = require('../controllers/professorasController')

// router.get('/', function(req, res){
//     res.status(200).send(professoras)
// })


router.get('/', controller.get) //QUERY PARAMS É O :ID
router.get('/profs', controller.getProfs)
router.get('/:id', controller.getById)



module.exports = router