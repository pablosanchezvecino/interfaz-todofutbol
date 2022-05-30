const boton = document.getElementById("enviar");
const formulario = document.getElementById("formulario");
const error = document.getElementById("error");
const { MongoClient } = require('mongodb');
//import {findByUsernameAndPassword} from './mongo.js';




async function main(){
    const uri = "mongodb+srv://pablo:1234@cluster0.m2uj4.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    console.log("prueba");

    await client.connect();

    const username = 'canino_conductor';
    const password = 'holabenas';

    const result = await client.db("todofutbol").collection("users").findOne({ username: username, password: password });
    console.log(result);

        if (result) {
            alert("Inicio de sesion correcto");
            location.reload();
            console.log("correcto");
        } else {
            error.style.opacity=1;
            console.log("incorrecto");
        }
    
}

boton.addEventListener("click", (e) => {
    e.preventDefault();

    main();

})



//boton.addEventListener("click", (e) => {
    //e.preventDefault();
    
    

    /*if(findByUsernameAndPassword(client, username, password)){
        alert("Inicio de sesion correcto");
        location.reload();
    } else {
        error.style.opacity=1;
    }*/

    /*if(username==="usuario" && password==="pas"){
        alert("Inicio de sesion correcto");
        location.reload();
    } else {
        error.style.opacity=1;
    }*/
//})