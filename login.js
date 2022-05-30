const boton = document.getElementById("enviar");


boton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    console.log(username.value);

    validar_login(username.value, password.value);
    //window.location.replace("/pantalla_principal/pantalla_principal.html");
    window.location.replace("/cabecera.html");
    
})

function validar_login(username, password) {

    

    if (localStorage.getItem(username) && password === JSON.parse(localStorage.getItem(username)).password) {
        console.log("Logeado con éxito");
        sessionStorage.setItem("active", localStorage.getItem(username));
    } else {
        console.log("Credenciales no válidas");
    }

}