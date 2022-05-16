var script_tag = document.getElementById('table-loader')
var competition = script_tag.getAttribute("competition");

fetch('http://api.football-data.org/v2/competitions/' +
       competition +
      '/standings', {
    method: 'GET',
    headers: {
        'X-Auth-Token': '68ce06e3eae1416ab29dd79b83831cc8'
    },
})
    .then(promesaFetch => promesaFetch.json())
    .then(equipos => {
        equipos.standings[0].table.forEach(equipo => {
            const style = 'text-align: center; vertical-align: middle;'
            const fila = document.getElementById('equipos').appendChild(document.createElement('tr'))

            const posicion = fila.appendChild(document.createElement('th'))
            posicion.style = style
            posicion.scope = 'row'
            posicion.textContent = equipo.position

            const escudo = fila.appendChild(document.createElement('td'))
            escudo.style = style
            const imagen = document.createElement('img')
            imagen.src = equipo.team.crestUrl
            imagen.alt = equipo.team.name
            imagen.height = 50
            escudo.appendChild(imagen)

            const puntos = fila.appendChild(document.createElement('td'))
            puntos.style = style
            puntos.textContent = equipo.points

            const partidosJugados = fila.appendChild(document.createElement('td'))
            partidosJugados.style = style
            partidosJugados.textContent = equipo.playedGames

            const partidosGanados = fila.appendChild(document.createElement('td'))
            partidosGanados.style = style
            partidosGanados.textContent = equipo.won

            const partidosEmpatados = fila.appendChild(document.createElement('td'))
            partidosEmpatados.style = style
            partidosEmpatados.textContent = equipo.draw

            const partidosPerdidos = fila.appendChild(document.createElement('td'))
            partidosPerdidos.style = style
            partidosPerdidos.textContent = equipo.lost

            const diferencia = fila.appendChild(document.createElement('td'))
            diferencia.style = style
            diferencia.textContent = equipo.goalDifference
        });
    })