const dropdown = document.getElementById("dropdown");

if(sessionStorage.getItem("active")){
    sesion = sessionStorage.getItem("active");
    dropdown.hidden=false;
} else {
    console.log("No esta logeado");
}

const login = document.getElementById("login");
const logout = document.getElementById("logout");

if(sessionStorage.getItem("active")){
    login.href="";
    login.textContent="Sesion iniciada";
    logout.hidden=false;
}


logout.addEventListener("click", (e)=>{

    e.preventDefault();
    sessionStorage.removeItem("active");
    window.location.replace("pantalla_principal/pantalla_principal");


})