const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear
const createTipoProyecto = async (req = request, 
    res = response) => {
    try {
        console.log(req.body)
        
        const data = req.body
        
        const tipoProyecto = new TipoProyecto(data)

        await tipoProyecto.save()

        return res.status(201).json(tipoProyecto)

    } catch(e) {
        return res.status(500).json({
            msj: e
        })
    }
}

const getTipoProyectos = async (req = request, 
    res = response) => {
        try {

            const tipoProyectos = await TipoProyecto.find()
    
            return res.json(tipoProyectos)
    
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

const updateTipoEquipoByID = async (req = request,
    res = response) => {
        try {
            const id = req.params.id

            const { nombre } = req.body

            const data = {
                nombre
            }
            data.fechaActualizacion = new Date()

            const tipoProyecto = 
                await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
    
            return res.status(201).json(tipoProyecto)
    
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }  
}

module.exports = { 
    createTipoProyecto, 
    getTipoProyectos,
    updateTipoEquipoByID
}