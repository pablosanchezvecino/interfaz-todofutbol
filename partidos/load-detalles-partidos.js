const script_tag = document.getElementById('detalles-partidos-loader')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const partido_id = urlParams.get('partido_id');

fetch('http://api.football-data.org/v2/matches/' + partido_id, {
    method: 'GET',
    headers: {
        'X-Auth-Token': '68ce06e3eae1416ab29dd79b83831cc8'
    },
})
    .then(promesaFetch => promesaFetch.json())
    .then(partido => {

        var competicion
        var competicionLogo 
        if(partido.match.competition.name === 'Premier League'){
            competicion = 'PL'
            competicionLogo = 'premier-league-chico'
            division = "Inglesa"
        } else if(partido.match.competition.name === 'Primera Division'){
            competicion = 'PD'
            competicionLogo = 'laliga'
            division = "Española"
        } else if(partido.match.competition.name === 'Serie A'){
            competicion = 'SA'
            competicionLogo = 'serie-a'
            division = "Italiana"
        } else if(partido.match.competition.name === 'Bundesliga'){
            competicion = 'BL1'
            competicionLogo = 'bundesliga'
            division = "Alemana"
        } else if(partido.match.competition.name === 'Ligue 1'){
            competicion = 'FL1'
            competicionLogo = 'ligue-1-oscuro'
            division = "Francesa"
        }

        const urlLocal = '../../res/escudos/' + escudo(competicion, partido.match.homeTeam.name) + '.png'
        const urlVisitante = '../../res/escudos/' + escudo(competicion, partido.match.awayTeam.name) + '.png'


        const cabeceraCompeticion = document.getElementById('cabeceraCompeticion')
        const imageLiga = document.createElement('img')
        imageLiga.className = 'col-auto me-2'
        imageLiga.src = '../../res/ligas/' + competicionLogo + '.png'
        imageLiga.alt = 'Logo de ' + partido.match.competition.name
        imageLiga.height = '64'
        imageLiga.width = '64'
        cabeceraCompeticion.appendChild(imageLiga)

        const divContenedor = document.createElement('div')
        divContenedor.className = 'container col'
        const textoDivision = document.createElement('p')
        textoDivision.className = 'mb-0 text-muted'
        textoDivision.id = 'division'
        textoDivision.textContent = 'Primera División ' + division
        divContenedor.appendChild(textoDivision)

        const liga = document.createElement('h1')
        if(partido.match.competition.name === 'Primera Division')
            liga.textContent = 'LaLiga'
         else 
            liga.textContent = partido.match.competition.name

        divContenedor.appendChild(liga)
        cabeceraCompeticion.appendChild(divContenedor)


        const row = document.getElementById('rowResultado')

        const col = document.createElement('div')
        col.className = 'col-lg-1 text-center'
        row.appendChild(col)
        const figure1 = document.createElement('figure')
        const image1 = document.createElement('img')
        image1.src = urlLocal
        // Versión con recursos remotos (queda peor)
        // image1.src = 'https://crests.football-data.org/' + partido.homeTeam.id  + '.svg'
        image1.alt = 'Escudo del ' + partido.match.homeTeam.name
        image1.height = '80'
        const figcaption1 = document.createElement('figcaption')
        figcaption1.textContent = partido.match.homeTeam.name
        figure1.appendChild(image1)
        figure1.appendChild(figcaption1)
        col.appendChild(figure1)

        const col2 = document.createElement('div')
        col2.className = 'col-md-1 text-center'
        row.appendChild(col2)
        const partido_resultado = document.createElement('h3')
        partido_resultado.className = 'lh-lg'
        partido_resultado.textContent = partido.match.score.fullTime.homeTeam + ' - ' + partido.match.score.fullTime.awayTeam
        col2.appendChild(partido_resultado)

        const col3 = document.createElement('div')
        col3.className = 'col-lg-1 text-center'
        row.appendChild(col3)
        const figure2 = document.createElement('figure')
        const image2 = document.createElement('img')
        image2.src = urlVisitante
        // Versión con recursos remotos (queda peor)
        // image2.src = 'https://crests.football-data.org/' + partido.awayTeam.id  + '.svg'
        image2.alt = 'Escudo del ' + partido.match.awayTeam.name
        image2.height = '80'
        const figcaption2 = document.createElement('figcaption')
        figcaption2.textContent = partido.match.awayTeam.name
        figure2.appendChild(image2)
        figure2.appendChild(figcaption2)
        col3.appendChild(figure2)


        const containerDetalles = document.getElementById('containerDetalles')

        const ganador = document.createElement('p')
        var resultado
        if(partido.match.score.winner === "DRAW")
            resultado = "Empate"
        else if(partido.match.score.winner === "HOME_TEAM")
            resultado = partido.match.homeTeam.name
        else 
            resultado = partido.match.awayTeam.name
        
        ganador.innerHTML = "<b>Ganador: </b>" + resultado
        containerDetalles.appendChild(ganador)

        const fecha = document.createElement('p')
        const utcDate = new Date(partido.match.utcDate)
        const date = new Date(utcDate);
        fecha.innerHTML = "<b>Fecha del partido: </b>" + date.toLocaleString().slice(0, -3)
        containerDetalles.appendChild(fecha)

        if(partido.match.venue != null){
            const estadio = document.createElement('p')
            estadio.innerHTML = "<b>Estadio: </b>" + partido.match.venue
            containerDetalles.appendChild(estadio)
        }

        const arbitros = document.createElement('p')
        arbitros.innerHTML = "<b>Arbitros: </b>"
        containerDetalles.appendChild(arbitros)

        const listaArbitros = document.createElement('ul')

        partido.match.referees.forEach(arbitro => {
            const elemento_lista = document.createElement('li')
            elemento_lista.textContent = arbitro.name
            listaArbitros.appendChild(elemento_lista)
        })
        containerDetalles.appendChild(listaArbitros)

        document.getElementById("spinner").remove()
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


