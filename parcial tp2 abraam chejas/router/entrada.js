import express from 'express'
import Controlador from '../controlador/entrada.js'
class Router{
   constructor() {
    this.router = express.Router()
    this.controlador = new Controlador()
   }

   start = () => {
    this.router.get('/', this.controlador.obtenerNumeros)
    this.router.post('/', this.controlador.agregarNumero)
    this.router.get('/promedio', this.controlador.obtenerPromedio)
    this.router.get('/minmax', this.controlador.obtenerMinMax)
    this.router.get('/cantidad', this.controlador.obtenerCantidad)
    
    return this.router
   }
} export default Router