
const express = require("express")
const app = express()
const port = process.env.PORT || 8080

const fs = require("fs")

async function leerProductos(nombreArchivo) {
    let contenido
    try {
        contenido = await fs.promises.readFile(nombreArchivo, `utf-8`)
    } catch (err) {
        throw new Error(`ASDSA`)
    }
    if (esContenidoValido(contenido)) {
        return JSON.parse(contenido)
    } else {
        throw new Error(`Error`)
    }
}

function esContenidoValido(contenido) {
    return contenido !== ""
}

class Contenedor {
    constructor() {
        this.nombreArchivo = "Archivo.txt"
    }
    async getRandom() {
        try {
            const array = (await contenedor.getAll())
            const min = 0
            const max = array.length
            const random = Math.floor((Math.random() * max)) + min
            return random
        }
        catch {
            throw new Error(`No se pudo leer el archivo`)
        }
    }

    async getAll() {
        try {
            return await leerProductos(this.nombreArchivo)
        } catch {
            throw new Error(`No se pudo leer el archivo`)
        }
    }
}

app.get(`/productos`, (req, res) => {
    async function mostrarObjs() {
        const array = JSON.stringify((await contenedor.getAll()))
        res.send(array)
    }
    mostrarObjs()
})

app.get(`/productosRandom`, (req, res) => {
    async function mostrarObjsRandom() {
        contenedor.getRandom()
        res.send(array[random])
    }
    mostrarObjsRandom()
})

const server = app.listen(port, () => {
    console.log(`Servidor esta corriendo \n Numero: ${server.address().port}`)
})
server.on("error", error => console.log("error"))

const contenedor = new Contenedor(archivo)
