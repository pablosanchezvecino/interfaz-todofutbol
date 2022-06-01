const boton = document.getElementById("enviar");
const passError = document.getElementById("passError");
const userError = document.getElementById("userError");
const error = document.getElementById("error");


boton.addEventListener("click", (e) => {
    e.preventDefault();

    error.hidden=true;

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    console.log(username.value);
    if(username.value==="" && password.value===""){
        passError.hidden=false;
        userError.hidden=false;
    }
    else if(username.value===""){
        passError.hidden=true;
        userError.hidden=false;
    } else if(password.value===""){
        passError.hidden=false;
        userError.hidden=true;
    } else {
        passError.hidden=true;
        userError.hidden=true;
        validar_login(username.value, password.value);
    }
    
    
    //window.location.replace("/pantalla_principal/pantalla_principal.html");
    
    
})

function validar_login(username, password) {

    

    if (localStorage.getItem(username) && password === JSON.parse(localStorage.getItem(username)).password) {
        console.log("Logeado con éxito");
        sessionStorage.setItem("active", localStorage.getItem(username));
        window.location.replace("pantalla_principal/pantalla_principal.html");
        alert("Sesion iniciada");
    } else {
        console.log("Credenciales no válidas");
        error.hidden=false;
    }

}