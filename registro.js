const boton = document.getElementById("enviar");


boton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    console.log(username.value);

    registrar_usuario(username.value, password.value);
    validar_login(username.value, password.value);
    //window.location.replace("/pantalla_principal/pantalla_principal.html");
    window.location.replace("/cabecera.html");
    
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