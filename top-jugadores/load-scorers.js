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

            const urlEquipo = '../res/escudos/' + escudo(competition, jugador.team.name) + '.png'

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


            const nombreEquipo = fila.appendChild(document.createElement('td'))
            nombreEquipo.style = style
            

            const imagen = document.createElement('img')
            imagen.src = urlEquipo
            imagen.height = 30

            nombreEquipo.appendChild(imagen)

            const div = nombreEquipo.appendChild(document.createElement('div'))
            div.textContent = jugador.team.name
            /*const escudo = fila.appendChild(document.createElement('td'))
            escudo.style = style
            const imagen = document.createElement('img')
            imagen.src = jugador.team.crestUrl
            imagen.alt = jugador.team.name
            imagen.height = 50
            escudo.appendChild(imagen)*/


            /*const nombreEquipo = fila.appendChild(document.createElement('td'))
            nombreEquipo.style = style
            const imagen = nombreEquipo.appendChild(document.createElement('img'))
            imagen.src = urlEquipo
            nombreEquipo.appendChild(imagen)

            nombreEquipo.textContent = jugador.team.name*/



            const goles = fila.appendChild(document.createElement('td'))
            goles.style = style
            goles.textContent = jugador.numberOfGoals


        });
       // document.getElementById("spinner").remove()
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
    console.log(res)
        return res
    }