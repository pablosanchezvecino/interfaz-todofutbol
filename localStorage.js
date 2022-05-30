

registrar_usuario("canino_conductor", "holabuenas")


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
    } else {
        console.log("Credenciales no válidas");
    }

}

function add_favorite(teamId, username) {
    
    var user = JSON.parse(localStorage.getItem(username));

    user.favoriteTeams.push(teamId)

    localStorage.setItem(username, JSON.stringify(user));

}

function remove_favorite(teamId, username) {
    
    var user = JSON.parse(localStorage.getItem(username));

    const index = user.favoriteTeams.indexOf(teamId);

    if (index > -1) {
        user.favoriteTeams.splice(index, 1); 
    }

    localStorage.setItem(username, JSON.stringify(user));

}

function get_favorites(username) {
    
    if (localStorage.getItem(username)) {
        return JSON.parse(localStorage.getItem(username)).favoriteTeams;
    }

}