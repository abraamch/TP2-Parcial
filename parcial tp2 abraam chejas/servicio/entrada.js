import Modelo from "../modelo/entrada.js";
class Servicio {
    constructor () {
     this.modelo = new Modelo()
    }
 
    obtenerNumeros = async () => {
         const numeros = await this.modelo.obtenerNumeros();
         return numeros.map((nro) => nro.numero);
    }
 
    agregarNumero = async (numero) => {
       return await this.modelo.agregarNumero(numero);
    }
 
    obtenerPromedio = async () => {
         const numeros = await this.modelo.obtenerNumeros();
         const nros = numeros.map((numero) => parseFloat(numero.numero));
         const sumarNumeros = nros.reduce((acumulador, numero) => acumulador + numero, 0);
        
         return sumarNumeros / numeros.length;
    }
 
    obtenerMinMax = async () => {
        const numeros = await this.modelo.obtenerNumeros();
        const nros = numeros.map((numero) => parseFloat(numero.numero));
   
        let maximo = nros[0];
        let minimo = nros[0];
   
        nros.forEach((numero) => {
            const nro = numero;
            if (nro > maximo) {
                maximo = numero;
            }
            if (nro < minimo) {
                minimo = numero;
            }
        });
   
        return { "maximo": maximo, "minimo": minimo };
   }
   
 
    obtenerCantidad = async () => {
         const numeros = await this.modelo.obtenerNumeros();
         return numeros.length;
    }
 }
 export default Servicio