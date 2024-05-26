const { Router } = require('express')
const { 
    createTipoProyecto, 
    getTipoProyectos,
    updateTipoEquipoByID 
} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyectos)

router.put('/:id', updateTipoEquipoByID)

module.exports = router;