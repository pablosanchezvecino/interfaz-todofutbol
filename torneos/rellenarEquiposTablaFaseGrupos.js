const grupo = new URLSearchParams(window.location.search).get('grupo')
const competicion = new URLSearchParams(window.location.search).get('competicion')

fetch('https://api.football-data.org/v2/competitions/'+competicion+'/standings', {
    method: 'GET',
    headers: {
        'X-Auth-Token': 'f663af7b882a413081471f3e80db5ab6'
    },
})
    .then(promesaFetch => promesaFetch.json())
    .then(partidos => {
        const grupoA = partidos.standings.find(standing => standing.group === grupo)
        grupoA.table.filter(equipo => equipo.team.id != null).forEach(equipo => {
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
            imagen.width = 50
            escudo.appendChild(imagen)

            const nombreEquipo = escudo.appendChild(document.createElement('div'))
            nombreEquipo.textContent= equipo.team.name

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

            const puntos = fila.appendChild(document.createElement('td'))
            puntos.style = style
            puntos.textContent = equipo.points
        });
        const nombreGrupo = grupoA.group.split('_')
        document.title += ' '+nombreGrupo[1]
        document.getElementById('nombreGrupo').textContent += ' '+nombreGrupo[1]
        document.getElementById('spinner').remove()
    })

    