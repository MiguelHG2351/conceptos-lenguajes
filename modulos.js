import Saludos from './modulo1.js'

class FirstClase extends Saludos {
    constructor() {
        super()
    }
    despedir(name) {
        console.log(`usted ha sido asendido a cliente, ${name}`)

    }
}


let saluda = new FirstClase();
saluda.saludar("Miguel")