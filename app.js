const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

const { mongoConn } = require('./databases/configuration')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

mongoConn()

const tipoProyectos = require('./routes/tipoProyecto')
const clientes = require('./routes/cliente')
const universidad = require('./routes/universidad')
const etapa = require('./routes/etapa')


// middlewares
app.use('/api/tiposproyectos', tipoProyectos)
app.use('/api/clientes', clientes)
app.use('/api/universidades', universidad)
app.use('/api/etapas', etapa)

module.exports = app