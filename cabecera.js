const dropdown = document.getElementById("dropdown");

if(sessionStorage.getItem("active")){
    sesion = sessionStorage.getItem("active");
} else {
    console.log("No esta logeado");
}
if(sesion){
    dropdown.style.opacity=1;
}