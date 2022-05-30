



initialize_heart("canino_conductor", 777)







heart.addEventListener("click", (e) => {
    e.preventDefault();

    const username = 'canino_conductor'
    const teamId = 777

    const heart = document.getElementById('heart');

    // Si estaba vacío
    if (heart.src.endsWith("vacio.gif") || heart.src.endsWith("vaciar.gif")) {
        // Lo rellenamos
        heart.src = "../res/rellenar.gif"
        // Añadir id al array de favoritos del user
        add_favorite(teamId, username)
        // Mostrar un toast o similar como feedback
    } else { // Si estaba relleno
        // Lo vaciamos
        heart.src = "../res/vaciar.gif"
        // Borrar id del array de favoritos del user
        remove_favorite(teamId, username)
        // Mostrar un toast o similar como feedback
    }


})





















function initialize_heart(username, teamId) {

    const heart = document.createElement("input")
    document.body.prepend(heart)
    heart.type = 'image'
    heart.id = "heart"

    if (get_favorites(username).includes(teamId)) {
        heart.src = "../res/relleno.gif"
    } else {
        heart.src = "../res/vacio.gif"
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






