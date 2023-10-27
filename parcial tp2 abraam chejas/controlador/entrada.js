import Servicio from '../servicio/entrada.js'
import express from 'express'
class Controlador {
constructor() {
    this.servicio = new Servicio ()
    this.router = express.Router()
}

    obtenerNumeros = async (req, res) => {
        const numeros =  await this.servicio.obtenerNumeros()
       res.json('numeros:' + numeros)
    }

    agregarNumero =  async (req, res) => {
       const numero = req.body 
       const numeroAgregado = await this.servicio.agregarNumero(numero)
       res.json(numeroAgregado)
    }
    obtenerPromedio = async (req, res) => {
        const promedio = await this.servicio.obtenerPromedio()
        res.json(promedio)
    }
    obtenerMinMax = async  (req, res) => {
        const minMax =  await this.servicio.obtenerMinMax()
        res.json(minMax)
    }
    obtenerCantidad = async (req, res) => {
        const cantidad =  await this.servicio.obtenerCantidad()
        res.json('cantidad de numeros: ' + cantidad)
    }
} export default Controlador 