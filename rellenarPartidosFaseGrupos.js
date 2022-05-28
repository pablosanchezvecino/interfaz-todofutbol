const grupoPartidos = new URLSearchParams(window.location.search).get('grupo')

fetch('http://api.football-data.org/v2/competitions/CL/matches?stage=GROUP_STAGE&group='+grupoPartidos, {
    method: 'GET',
    headers: {
        'X-Auth-Token': 'f663af7b882a413081471f3e80db5ab6'
    },
})
    .then(promesaFetch => promesaFetch.json())
    .then(partidos => {
        const fila = document.getElementById('filaPartidos')

        partidos.matches.forEach(partido => {

            const articuloPartido = fila.appendChild(document.createElement('article'))
            articuloPartido.classList ='col'

            const card = document.createElement('div')
            card.className = 'card mb-3'
            card.style = 'width: max-content; text-align: center;'

            articuloPartido.appendChild(card)

            const ul1 = document.createElement('ul')
            ul1.className = 'list-group list-group-horizontal'
            card.appendChild(ul1)

            const li1 = document.createElement('li')
            li1.className = 'list-group-item border-0'
            ul1.appendChild(li1)

            const ul2 = document.createElement('ul')
            ul2.title = partido.homeTeam.name
            ul2.className = 'list-group'
            li1.appendChild(ul2)

            const li2 = document.createElement('li')
            li2.className = 'list-group-item border-0'
            ul2.appendChild(li2)

            const image1 = document.createElement('img')
            image1.src = 'https://crests.football-data.org/'+partido.homeTeam.id +'.png'
            image1.srcset = 'https://crests.football-data.org/'+partido.homeTeam.id +'.svg'
            image1.height = '80'
            li2.appendChild(image1)

            const li3 = document.createElement('li')
            li3.className = 'list-group-item border-0'
            li3.style = 'width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
            li3.textContent = partido.homeTeam.name
            ul2.appendChild(li3)

            const li4 = document.createElement('li')
            li4.className = 'list-group-item border-0'
            ul1.appendChild(li4)

            const br1 = document.createElement('br')
            li4.appendChild(br1)
            const br2 = document.createElement('br')
            li4.appendChild(br2)

            const h2Resultado = document.createElement('h2')
            h2Resultado.textContent = partido.score.fullTime.homeTeam + ' - ' + partido.score.fullTime.awayTeam
            li4.appendChild(h2Resultado)

            const li5 = document.createElement('li')
            li5.className = 'list-group-item border-0'
            ul1.appendChild(li5)

            const ul3 = document.createElement('ul')
            ul3.className = 'list-group'
            ul3.title = partido.awayTeam.name
            li5.appendChild(ul3)

            const li6 = document.createElement('li')
            li6.className = 'list-group-item border-0'
            ul3.appendChild(li6)

            const image2 = document.createElement('img')
            image2.src = 'https://crests.football-data.org/'+partido.awayTeam.id +'.png'
            image2.srcset = 'https://crests.football-data.org/'+partido.awayTeam.id +'.svg'
            image2.height = '80'
            li6.appendChild(image2)

            const li7 = document.createElement('li')
            li7.style = 'width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
            li7.className = 'list-group-item border-0'
            li7.textContent = partido.awayTeam.name
            ul3.appendChild(li7)

            const footer = document.createElement('div')
            footer.className = 'card-footer text-bg-dark'            

            card.appendChild(footer)

            const fecha = document.createElement('h5')
            const utcDate = new Date(partido.utcDate)
            const date = new Date(utcDate);
            fecha.textContent = date.toLocaleString().slice(0, -3)

            footer.appendChild(fecha)
        })
    })