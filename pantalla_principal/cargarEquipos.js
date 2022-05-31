fetch('http://api.football-data.org/v2/teams?limit=10', {
    method: 'GET',
    headers: {
        'X-Auth-Token': '68ce06e3eae1416ab29dd79b83831cc8'
    },
})
.then(promesaFetch => promesaFetch.json())
.then(equipos => {
    const seccionEquipos = document.getElementById('seccionEquipos')
    console.log(equipos)
    equipos.teams.forEach(equipo => {
        const nombre = equipo.name
        //const competicion = 'PD' equipo.activeCompetitions[0].code
        //const urlEscudo = '../res/escudos/la-liga/betis.png'  //'../res/escudos/' + escudo(competicion, nombre) + '.png'

        const article = document.createElement('article')
        article.className = 'col-2'
        seccionEquipos.appendChild(article)

        const href = document.createElement('a')
        href.href = '../equipo/equipo.html?teamId=' + equipo.id
        href.className = 'text-decoration-none'
        article.appendChild(href)

        const card = document.createElement('div')
        card.className = 'card mb-3 col-lg-6 mx-5 my-3'
        card.style = 'text-align: center;'
        href.appendChild(card)

        const ul = document.createElement('ul')
        ul.className = 'list-group list-group-horizontal'
        card.appendChild(ul)

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
        img.src = 'https://crests.football-data.org/' + equipo.id + '.png' //urlEscudo
        img.height = '80'
        img.alt = 'Escudo de ' + nombre
        li_ul_li1.appendChild(img)

        const li_ul_li2 = document.createElement('li')
        li_ul_li2.className = 'list-group-item border-0 bg-dark text-light'
        li_ul_li2.style = 'width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
        li_ul_li2.textContent = nombre
        li_ul.appendChild(li_ul_li2)
    })
})

function escudo(competition, nombre) {
    var res = ''

    switch (competition) {

        case 'PD': // LaLiga
            res += 'la-liga/'
            switch (nombre) {

                case 'Real Madrid CF':
                    return res += 'madrid'

                case 'FC Barcelona':
                    return res += 'barcelona'

                case 'Club Atlético de Madrid':
                    return res += 'atletico'

                case 'Sevilla FC':
                    return res += 'sevilla'

                case 'Real Betis Balompié':
                    return res += 'betis'

                case 'Real Sociedad de Fútbol':
                    return res += 'real-sociedad'

                case 'Villarreal CF':
                    return res += 'villareal'

                case 'Athletic Club':
                    return res += 'athletic'

                case 'CA Osasuna':
                    return res += 'osasuna'

                case 'RC Celta de Vigo':
                    return res += 'celta'

                case 'Valencia CF':
                    return res += 'valencia'

                case 'Rayo Vallecano de Madrid':
                    return res += 'rayo'

                case 'RCD Espanyol de Barcelona':
                    return res += 'espanyol'

                case 'Getafe CF':
                    return res += 'getafe'

                case 'Elche CF':
                    return res += 'elche'

                case 'Granada CF':
                    return res += 'granada'

                case 'Cádiz CF':
                    return res += 'cadiz'

                case 'RCD Mallorca':
                    return res += 'mallorca'

                case 'Levante UD':
                    return res += 'levante'

                case 'Deportivo Alavés':
                    return res += 'alaves'
            }
            break;

        case 'PL': // Premier
            res += 'premier-league/'
            switch (nombre) {
                case 'Manchester City FC':
                    return res += 'manchester-city'

                case 'Liverpool FC':
                    return res += 'liverpool'

                case 'Chelsea FC':
                    return res += 'chelsea'

                case 'Tottenham Hotspur FC':
                    return res += 'tottenham'

                case 'Arsenal FC':
                    return res += 'arsenal'

                case 'Manchester United FC':
                    return res += 'manchester-united'

                case 'West Ham United FC':
                    return res += 'west-ham-united'

                case 'Wolverhampton Wanderers FC':
                    return res += 'wolves'

                case 'Leicester City FC':
                    return res += 'leicester'

                case 'Crystal Palace FC':
                    return res += 'crystal-palace'

                case 'Brighton & Hove Albion FC':
                    return res += 'brighton'

                case 'Brentford FC':
                    return res += 'brentford'

                case 'Newcastle United FC':
                    return res += 'newcastle'

                case 'Aston Villa FC':
                    return res += 'aston-villa'

                case 'Southampton FC':
                    return res += 'southampton'

                case 'Burnley FC':
                    return res += 'burnley'

                case 'Everton FC':
                    return res += 'everton'

                case 'Leeds United FC':
                    return res += 'leeds'

                case 'Watford FC':
                    return res += 'watford'

                case 'Norwich City FC':
                    return res += 'norwich'

            }
            break

        case 'SA': // Serie A
            res += 'serie-a/'
            switch (nombre) {
                case 'AC Milan':
                    return res += 'milan'

                case 'FC Internazionale Milano':
                    return res += 'inter-milan'

                case 'SSC Napoli':
                    return res += 'napoli'

                case 'Juventus FC':
                    return res += 'juventus'

                case 'SS Lazio':
                    return res += 'lazio'

                case 'AS Roma':
                    return res += 'roma'

                case 'ACF Fiorentina':
                    return res += 'fiorentina'

                case 'Atalanta BC':
                    return res += 'atalanta'

                case 'Hellas Verona FC':
                    return res += 'hellas-verona'

                case 'Torino FC':
                    return res += 'torino'

                case 'US Sassuolo Calcio':
                    return res += 'sassuolo'

                case 'Udinese Calcio':
                    return res += 'udinese'

                case 'Bologna FC 1909':
                    return res += 'bologna'

                case 'Empoli FC':
                    return res += 'empoli'

                case 'UC Sampdoria':
                    return res += 'sampdoria'

                case 'Spezia Calcio':
                    return res += 'spezia'

                case 'US Salernitana 1919':
                    return res += 'salernitana'

                case 'Cagliari Calcio':
                    return res += 'cagliari'

                case 'Genoa CFC':
                    return res += 'genoa'

                case 'Venezia FC':
                    return res += 'venezia'
            }
            break

        case 'BL1': // Bundesliga
            res += 'bundesliga/'
            switch (nombre) {
                case 'FC Bayern München':
                    return res += 'bayern'

                case 'Borussia Dortmund':
                    return res += 'borussia-dortmund'

                case 'Bayer 04 Leverkusen':
                    return res += 'leverkusen'

                case 'RB Leipzig':
                    return res += 'leipzig'

                case '1. FC Union Berlin':
                    return res += 'union-berlin'

                case 'SC Freiburg':
                    return res += 'freiburg'

                case '1. FC Köln':
                    return res += 'koln'

                case '1. FSV Mainz 05':
                    return res += 'mainz'

                case 'TSG 1899 Hoffenheim':
                    return res += 'hoffenheim'

                case 'Borussia Mönchengladbach':
                    return res += 'monchen-gladbach'

                case 'Eintracht Frankfurt':
                    return res += 'eintracht-frankfurt'

                case 'VfL Wolfsburg':
                    return res += 'wolfsburg'

                case 'VfL Bochum 1848':
                    return res += 'bochum'

                case 'FC Augsburg':
                    return res += 'augsburg'

                case 'VfB Stuttgart':
                    return res += 'stuttgart'

                case 'Hertha BSC':
                    return res += 'hertha'

                case 'Arminia Bielefeld':
                    return res += 'bielefeld'

                case 'SpVgg Greuther Fürth 1903':
                    return res += 'furth'
            }
            break


        case 'FL1': // Ligue 1
            res += 'ligue-1/'
            switch (nombre) {
                case 'Paris Saint-Germain FC':
                    return res += 'psg'

                case 'AS Monaco FC':
                    return res += 'monaco'

                case 'Olympique de Marseille':
                    return res += 'marsella'

                case 'Stade Rennais FC 1901':
                    return res += 'rennes'

                case 'RC Strasbourg Alsace':
                    return res += 'strasbourg'

                case 'OGC Nice':
                    return res += 'nice'

                case 'Racing Club de Lens':
                    return res += 'lens'

                case 'Olympique Lyonnais':
                    return res += 'lyon'

                case 'FC Nantes':
                    return res += 'nantes'

                case 'Lille OSC':
                    return res += 'lille'

                case 'Stade Brestois 29':
                    return res += 'brestois'

                case 'Stade de Reims':
                    return res += 'stade-de-reims'

                case 'Montpellier HSC':
                    return res += 'montpellier'

                case 'Angers SCO':
                    return res += 'angers'

                case 'ES Troyes AC':
                    return res += 'troyes'

                case 'Clermont Foot 63':
                    return res += 'clermont'

                case 'FC Lorient':
                    return res += 'lorient'

                case 'FC Metz':
                    return res += 'metz'

                case 'AS Saint-Étienne':
                    return res += 'saint-etienne'

                case 'FC Girondins de Bordeaux':
                    return res += 'girondins'
            }
            break
    }

    return res
}