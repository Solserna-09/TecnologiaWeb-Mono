const Etapa = require('../models/etapa')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
    try {
         
        const data = req.body
        
        const etapa = new Etapa(data)

        await etapa.save()

        return res.status(201).json(etapa)

    } catch(e) {
        return res.status(500).json({
            msj: e
        })
    }
}

const getEtapas = async (req = request, 
    res = response) => {
        try {

            const etapas = await Etapa.find()
    
            return res.json(etapas)
    
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

const updateEtapaByID = async (req = request,
    res = response) => {
        try {
            const id = req.params.id

            const { nombre } = req.body

            const data = {
                nombre

            }
            data.fechaActualizacion = new Date()

            const etapa = 
                await Etapa.findByIdAndUpdate(id, data, {new: true})
    
            return res.status(201).json(etapa)
    
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }  
}

module.exports = { 
    createEtapa, 
    getEtapas,
    updateEtapaByID
}