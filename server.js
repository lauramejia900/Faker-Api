const express = require("express");
const {faker} = require("@faker-js/faker")
const app = express();


class Usuario{ 
    constructor(){
        this._id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.telefono = faker.phone.number();
        this.email = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}

class Empresa{
    constructor(){
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.name();
        this.direccion ={
            calle: faker.address.street(),
            city: faker.address.city(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()

        }
    }
}


app.get("/api/users/new", (req, res) => {
    let nuevoUsuario = new Usuario;
    res.json(nuevoUsuario);
})

app.get("/api/companies/new", (req, res) => {
    let nuevaCompañia = new Empresa;
    res.json(nuevaCompañia);
})

app.get("/api/user/company", (req, res) => {
    let nuevaCompañia = new Empresa;
    let nuevoUsuario = new Usuario;
    res.json([nuevoUsuario, nuevaCompañia]);
})

app.listen(8000, () =>{
    console.log("Servidor corriendo");
})