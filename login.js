const boton = document.getElementById("enviar");
const formulario = document.getElementById("formulario");
const error = document.getElementById("error");
import {findByUsernameAndPassword} from './mongo.js';

const uri = "mongodb+srv://pablo:1234@cluster0.m2uj4.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

boton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formulario.username.value;
    const password = formulario.password.value;

    if(findByUsernameAndPassword(client,username,password)){
        alert("Inicio de sesion correcto");
        location.reload();
    } else {
        error.style.opacity=1;
    }

    /*if(username==="usuario" && password==="pas"){
        alert("Inicio de sesion correcto");
        location.reload();
    } else {
        error.style.opacity=1;
    }*/
})