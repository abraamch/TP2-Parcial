class Modelo {
    constructor () {
        this.numeros = []
    }
    obtenerNumeros = () => {
        return this.numeros
    }

    agregarNumero = (numero) => {
        this.numeros.push(numero)
      return numero
    }
} export default Modelo 