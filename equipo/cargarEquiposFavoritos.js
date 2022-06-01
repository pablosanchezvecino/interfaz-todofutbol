const lista = document.getElementById('equipos-favoritos')

if (!sessionStorage.getItem('active')) {
    alert('No has iniciado sesión')
    window.location.replace('../pantalla_principal/pantalla_principal.html')
}

const equipos = JSON.parse(sessionStorage.getItem('active')).favoriteTeams

if (equipos.length == 0) {
    const msg = document.createElement('p')
    msg.textContent = 'No sigues a ningún equipo'
    lista.appendChild(msg)
} else {
    equipos.forEach(equipoId => {
        // Buscar equipo en la api
        fetch('http://api.football-data.org/v2/teams/' + equipoId, {
            method: 'GET',
            headers: {
                'X-Auth-Token': '68ce06e3eae1416ab29dd79b83831cc8'
            },
        })
        .then(promesaFetch => promesaFetch.json())
        .then(equipo => {
            // Añadirlo al html
            const article = document.createElement('article')
            article.className = 'col'
            lista.appendChild(article)

            const div = document.createElement('div')
            div.className = 'card mb-3 col mx-5 my-3'
            div.style = 'text-align: center;'
            article.appendChild(div)

            const ahref = document.createElement('a')
            ahref.href = 'equipo.html?teamId=' + equipoId
            ahref.className = 'text-decoration-none'
            div.appendChild(ahref)

            const ul = document.createElement('ul')
            ul.className = 'list-group list-group-horizontal'
            ahref.appendChild(ul)

            const li = document.createElement('li')
            li.className = 'list-group-item border-0 bg-dark'
            ul.appendChild(li)

            const li_ul = document.createElement('ul')
            li_ul.className = 'list-group'
            li.appendChild(li_ul)

            const li_ul_li1 = document.createElement('li')
            li_ul_li1.className = 'list-group-item border-0 bg-dark'
            li_ul.appendChild(li_ul_li1)

            const img = document.createElement('img')
            img.src = equipo.crestUrl
            img.height = '80'
            img.alt = 'Escudo del ' + equipo.name
            li_ul_li1.appendChild(img)

            const li_ul_li2 = document.createElement('li')
            li_ul_li2.className = 'list-group-item border-0 bg-dark text-light'
            li_ul_li2.textContent = equipo.name
            li_ul.appendChild(li_ul_li2)
        })
    })
}