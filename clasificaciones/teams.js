const script_tag = document.getElementById('table-loader')
const competition = script_tag.getAttribute("competition");

fetch('https://api.football-data.org/v2/competitions/' +
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
            
            const fila = document.getElementById('equipos').appendChild(document.createElement('tr'))

            const posicion = fila.appendChild(document.createElement('th'))
            posicion.style = 'text-align: center; vertical-align: middle;'
            posicion.scope = 'row'
            posicion.textContent = equipo.position



            const celda = fila.insertCell()
            celda.style = 'text-align: center; vertical-align: middle;'

            const escudo = celda.appendChild(document.createElement('img'))
            escudo.src = equipo.team.crestUrl
            escudo.alt = 'Escudo del ' + equipo.team.name
            escudo.height = 32
            const nombre = celda.appendChild(document.createElement('b'))
            nombre.classList = 'ms-2'
            nombre.style = 'text-align: center; vertical-align: middle;'
            nombre.textContent = equipo.team.name

            const puntos = fila.insertCell()
            puntos.style = 'text-align: center; vertical-align: middle;'
            puntos.textContent = equipo.points
            
            const partidosJugados = fila.insertCell()
            partidosJugados.style = 'text-align: center; vertical-align: middle;'
            partidosJugados.textContent = equipo.playedGames

            const partidosGanados = fila.appendChild(document.createElement('td'))
            partidosGanados.style = 'text-align: center; vertical-align: middle;'
            partidosGanados.textContent = equipo.won

            const partidosEmpatados = fila.appendChild(document.createElement('td'))
            partidosEmpatados.style = 'text-align: center; vertical-align: middle;'
            partidosEmpatados.textContent = equipo.draw

            const partidosPerdidos = fila.appendChild(document.createElement('td'))
            partidosPerdidos.style = 'text-align: center; vertical-align: middle;'
            partidosPerdidos.textContent = equipo.lost

            const diferenciaGoles = fila.insertCell()
            diferenciaGoles.style = 'text-align: center; vertical-align: middle;'
            diferenciaGoles.textContent = equipo.goalDifference
            
            
            /*const escudo = fila.appendChild(document.createElement('td'))
            escudo.style = style
            const imagen = document.createElement('img')
            imagen.src = equipo.team.crestUrl
            imagen.alt = 'Escudo del ' + equipo.team.name
            imagen.height = 50
            escudo.appendChild(imagen)

            const nombreEquipo = escudo.appendChild(document.createElement('div'))
            
            const textoNombreEquipo = nombreEquipo.appendChild('b');
            textoNombreEquipo.textContent = equipo.team.name

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
            diferencia.textContent = equipo.goalDifference*/
        });
        document.getElementById("spinner").remove()
    })