const boton = document.getElementById("enviar");
const passError = document.getElementById("passError");
const pass2Error = document.getElementById("pass2Error");
const userError = document.getElementById("userError");
const noigualesError = document.getElementById("noigualesError");


boton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    
    noigualesError.hidden=true;

    if(username.value==="" && password.value==="" && password2.value===""){
        passError.hidden=false;
        pass2Error.hidden=false;
        userError.hidden=false;
    } else if(username.value==="" && password.value===""){
        passError.hidden=false;
        pass2Error.hidden=true;
        userError.hidden=false;
    } else if(password.value==="" && password2.value===""){
        passError.hidden=false;
        pass2Error.hidden=false;
        userError.hidden=true;
    } else if(username.value==="" && password2.value===""){
        passError.hidden=true;
        pass2Error.hidden=false;
        userError.hidden=false;
    } else if(username.value===""){
        passError.hidden=true;
        pass2Error.hidden=true;
        userError.hidden=false;
    } else if(password.value===""){
        passError.hidden=false;
        pass2Error.hidden=true;
        userError.hidden=true;
    } else if(password2.value===""){
        passError.hidden=true;
        pass2Error.hidden=false;
        userError.hidden=true;
    } else if(password.value!==password2.value){
        passError.hidden=true;
        pass2Error.hidden=true;
        userError.hidden=true;
        noigualesError.hidden=false;
    } else {
        passError.hidden=true;
        pass2Error.hidden=true;
        userError.hidden=true;
        registrar_usuario(username.value, password.value);
        validar_login(username.value, password.value);
        window.location.replace("pantalla_principal/pantalla_principal.html");
    }

    
    //window.location.replace("/cabecera.html");
    

    
    
})


function registrar_usuario(username, password) {

    let user = {
        username: username,
        password: password,
        favoriteTeams: []
    };

    if (localStorage.getItem(username)) {
        console.log("El nombre de usuario ya está cogido");
    } else {
        localStorage.setItem(username, JSON.stringify(user));
    }


}

function validar_login(username, password) {

    

    if (localStorage.getItem(username) && password === JSON.parse(localStorage.getItem(username)).password) {
        console.log("Logeado con éxito");
        sessionStorage.setItem("active", localStorage.getItem(username));
    } else {
        console.log("Credenciales no válidas");
    }

}