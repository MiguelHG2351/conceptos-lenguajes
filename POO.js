'strict mode'

class Saludos {
    saludar(name) {
        console.log(`Hola, ${name}`)
    }
}

// Modelo

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

// let saluda = new Saludos();
// saluda.saludar("Miguel")

// Promesas

const promise = new Promise((resolve, reject) => {
    let data = "Hi"
    resolve(data)
})

promise.then(data => {
    console.log(data)
})

promise.catch((err) => {
    console.log(err)
})

// Herencia
let array = Array.prototype.push(["hola"])