const { Router } = require('express')
const { 
    createUniversidad, 
    getUniversidad,
    updateUniversidadByID
} = require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getUniversidad)

router.put('/:id', updateUniversidadByID)

module.exports = router;