const competicion = new URLSearchParams(window.location.search).get('competicion')

fetch('http://api.football-data.org/v2/competitions/'+competicion+'/standings', {
    method: 'GET',
    headers: {
        'X-Auth-Token': 'f663af7b882a413081471f3e80db5ab6'
    },
})
    .then(promesaFetch => promesaFetch.json())
    .then(partidos => {
        const faseGrupos = document.getElementById('faseGrupos')
        const cabecera = faseGrupos.appendChild(document.createElement('h3'))
        cabecera.textContent = 'Fase de Grupos'
        cabecera.classList = 'mb-0 mt-3'
        const filaGrupos = faseGrupos.appendChild(document.createElement('div'))
        filaGrupos.classList = 'row g-3 mt-2'
        partidos.standings.forEach(grupo => {
            const articuloGrupo = filaGrupos.appendChild(document.createElement('article'))
            articuloGrupo.classList = 'col-lg-6'
            articuloGrupo.id = grupo.group

            const link = articuloGrupo.appendChild(document.createElement('a'))
            link.classList = 'text-reset text-decoration-none'
            link.title = 'Mostrar detalles'
            if(competicion === 'CL'){
                link.href = 'faseGrupoChampions.html?grupo='+grupo.group+'&competicion='+competicion
            }
            else{
                link.href = 'faseGrupoMundial.html?grupo='+grupo.group+'&competicion='+competicion
            }

            const card = link.appendChild(document.createElement('div'))
            card.classList = 'card'

            const cardHeader = card.appendChild(document.createElement('div'))
            cardHeader.classList = 'card-header text-center text-bg-dark'
            const header = cardHeader.appendChild(document.createElement('b'))
            header.classList = 'fs-5'
            const nombreGrupo = grupo.group.replace('_',' ').split(' ')
            header.textContent = nombreGrupo[0].toLowerCase().replace('g','G').replace('o','') + 'o ' + nombreGrupo[1].toUpperCase()

            const cardBody = card.appendChild(document.createElement('div'))
            cardBody.classList = 'card-body table-responsive'

            const table = cardBody.appendChild(document.createElement('table'))
            table.classList = 'table'

            const tableHeader = table.createTHead()
            tableHeader.classList = 'thead-dark'

            const headerRow = tableHeader.insertRow()

            const numeroHeader = headerRow.insertCell()
            numeroHeader.scope = 'col'

            const equipoHeader = headerRow.insertCell()
            equipoHeader.style = 'text-align: left; vertical-align: middle;'
            equipoHeader.scope = 'col'
            equipoHeader.textContent = 'Equipo'

            const diferenciaHeader = headerRow.insertCell()
            diferenciaHeader.style = 'text-align: left; vertical-align: middle;'
            diferenciaHeader.scope = 'col'
            diferenciaHeader.textContent = 'Diferencia Goles'

            const puntosHeader = headerRow.insertCell()
            puntosHeader.style = 'text-align: left; vertical-align: middle;'
            puntosHeader.scope = 'col'
            puntosHeader.textContent = 'Puntos'

            const tableBody = table.createTBody()
            grupo.table.filter(equipo => equipo.team.id != null).forEach(equipo => {
                const filaEquipo = tableBody.insertRow()

                const numero = filaEquipo.insertCell()
                numero.style = 'text-align: center; vertical-align: middle;'
                numero.textContent = equipo.position

                const celdaEquipo = filaEquipo.insertCell()
                equipo.style = 'text-align: center; vertical-align: middle;'

                const escudo = celdaEquipo.appendChild(document.createElement('img'))
                escudo.src = equipo.team.crestUrl
                escudo.height = 32
                escudo.width = 32
                escudo.alt = equipo.team.name
                const nombre = celdaEquipo.appendChild(document.createElement('b'))
                nombre.classList ='ms-2'
                nombre.style = 'text-align: center; vertical-align: middle;'
                nombre.textContent = equipo.team.name

                const goles = filaEquipo.insertCell()
                goles.style = 'text-align: center; vertical-align: middle;'
                goles.textContent = equipo.goalDifference

                const puntos = filaEquipo.insertCell()
                puntos.style = 'text-align: center; vertical-align: middle;'
                puntos.textContent = equipo.points

            })
        });
        document.getElementById('spinner').remove()
    })