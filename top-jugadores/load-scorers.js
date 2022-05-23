const script_tag = document.getElementById('table-loader')
const competition = script_tag.getAttribute("competition");
var pos = 1
fetch('http://api.football-data.org/v2/competitions/' +
    competition +
    '/scorers', {
    method: 'GET',
    headers: {
        'X-Auth-Token': '68ce06e3eae1416ab29dd79b83831cc8'
    },
})
    .then(promesaFetch => promesaFetch.json())
    .then(goleadores => {
        goleadores.scorers.forEach(jugador => {
            const style = 'text-align: center; vertical-align: middle;'
            const fila = document.getElementById('jugadores').appendChild(document.createElement('tr'))

            const posicion = fila.appendChild(document.createElement('th'))
            posicion.style = style
            posicion.scope = 'row'
            posicion.textContent = pos

            pos++

            const nombreJugador = fila.appendChild(document.createElement('td'))
            nombreJugador.style = style
            nombreJugador.textContent = jugador.player.name

            /*const escudo = fila.appendChild(document.createElement('td'))
            escudo.style = style
            const imagen = document.createElement('img')
            imagen.src = jugador.team.crestUrl
            imagen.alt = jugador.team.name
            imagen.height = 50
            escudo.appendChild(imagen)*/



            const nombreEquipo = fila.appendChild(document.createElement('td'))
            nombreEquipo.style = style
            nombreEquipo.textContent = jugador.team.name

            const goles = fila.appendChild(document.createElement('td'))
            goles.style = style
            goles.textContent = jugador.numberOfGoals


        });
        document.getElementById("spinner").remove()
    })