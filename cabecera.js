const { text } = require("stream/consumers");

const dropdown = document.getElementById("dropdown");

if(sessionStorage.getItem("active")){
    sesion = sessionStorage.getItem("active");
    dropdown.hidden=false;
} else {
    console.log("No esta logeado");
}

const login = document.getElementById("login");
const logout = document.getElementById("logout");

if(sessionStorage.getItem("active")){
    login.href="";
    username = JSON.parse(sessionStorage.getItem("active")).username;
    if(text.length>=9){
        shortUsername="";
        for(i=0; i<=5; i++){
            shortUsername+=username[i];
        }
        login.textContent="Bienvenido, "+shortUsername;
    } else {
        login.textContent="Bienvenido, "+username;
    }
    
    logout.hidden=false;
}


logout.addEventListener("click", (e)=>{

    e.preventDefault();
    sessionStorage.removeItem("active");
    window.location.replace("pantalla_principal/pantalla_principal");
})

const ht = new Map();
    ht.set("La Liga", "PD")
    ht.set("Athletic", 77);
    ht.set("Atlético de Madrid", 78);
    ht.set("Osasuna", 79);
    ht.set("Espanyol", 80);
    ht.set("Barça", 81);
    ht.set("Getafe", 82);
    ht.set("Granada", 83);
    ht.set("Real Madrid", 86);
    ht.set("Rayo Vallecano", 87);
    ht.set("Levante", 88);
    ht.set("Mallorca", 89);
    ht.set("Real Betis", 90);
    ht.set("Real Sociedad", 92);
    ht.set("Villareal", 94);
    ht.set("Valencia", 95);
    ht.set("Alavés", 263);
    ht.set("Cádiz", 264);
    ht.set("Elche", 285);
    ht.set("Celta", 558);
    ht.set("Sevilla", 559);

    ht.set("Premier League", "PL")
    ht.set("Arsenal", 57);
    ht.set("Aston Villa", 58);
    ht.set("Chelsea", 61);
    ht.set("Everton", 62);
    ht.set("Liverpool", 64);
    ht.set("Machester City", 65);
    ht.set("Manchester United", 66);
    ht.set("Newcastle", 67);
    ht.set("Norwich", 68);
    ht.set("Tottenham", 73);
    ht.set("Wolverhampton", 76);
    ht.set("Burnley", 328);
    ht.set("Leicester", 338);
    ht.set("Southampton", 340);
    ht.set("Leeds", 341);
    ht.set("Watford", 346);
    ht.set("Crystal Palace", 354);
    ht.set("Brighton Hove", 397);
    ht.set("Brentford", 402);
    ht.set("West Ham", 563);

    ht.set("Ligue 1", "FL1")
    ht.set("Brest", 512);
    ht.set("Marseille", 516);
    ht.set("Montpellier", 518);
    ht.set("Lille", 521);
    ht.set("Nice", 522);
    ht.set("Olympique Lyon", 523);
    ht.set("PSG", 524);
    ht.set("Lorient", 525);
    ht.set("Bordeaux", 526);
    ht.set("Saint-Étienne", 527);
    ht.set("Rennais", 529);
    ht.set("Troyes", 531);
    ht.set("Angers", 532);
    ht.set("Clermont", 541);
    ht.set("Nantes", 543);
    ht.set("Metz", 545);
    ht.set("Lens", 546);
    ht.set("Reims", 547);
    ht.set("Monaco", 548);
    ht.set("Strasbourg", 576);

    ht.set("Serie A", "SA")
    ht.set("Milan", 98);
    ht.set("Fiorentina", 99);
    ht.set("Roma", 100);
    ht.set("Atalanta", 102);
    ht.set("Bologna", 103);
    ht.set("Cagliari", 104);
    ht.set("Genoa", 107);
    ht.set("Inter", 108);
    ht.set("Juventus", 109);
    ht.set("Lazio", 110);
    ht.set("Napoli", 113);
    ht.set("Udinese", 115);
    ht.set("Empoli", 445);
    ht.set("Verona", 450);
    ht.set("Venezia", 454);
    ht.set("Salernitana", 455);
    ht.set("Sassuolo", 471);
    ht.set("Spezia", 488);
    ht.set("Sampdoria", 584);
    ht.set("Torino", 586);

    ht.set("Bundesliga", "BL1")
    ht.set("Köln", 1);
    ht.set("Hoffenheim", 2);
    ht.set("Leverkusen", 3);
    ht.set("Dortmund", 4);
    ht.set("Bayern München", 5);
    ht.set("Hertha", 9);
    ht.set("Stuttgart", 10);
    ht.set("Wolfsburg", 11);
    ht.set("Mainz", 15);
    ht.set("Augsburg", 16);
    ht.set("Freiburg", 17);
    ht.set("Mönchengladbach", 18);
    ht.set("Frankfurt", 19);
    ht.set("Greuther Fürth", 21);
    ht.set("Union Berlin", 28);
    ht.set("Bochum", 36);
    ht.set("Bielefeld", 38);
    ht.set("Leipzig", 721);

    ht.set("Champions League", "CL");
    ht.set("Worldcup 2022", "WC");

const buscar = document.getElementById("busqueda");
const relleno = document.getElementById("myInput");

buscar.addEventListener("click", (e)=>{
    
    id = ht.get(myInput.value);

    if(id==="PD"){
        window.location.replace("clasificaciones/laliga.html");
    } else
    if(id==="FL1"){
        window.location.replace("clasificaciones/ligue-1.html");
    } else
    if(id==="PL"){
        window.location.replace("clasificaciones/premier-league.html");
    } else
    if(id==="BL1"){
        window.location.replace("clasificaciones/bundesliga.html");
    }else
    if(id==="SA"){
        window.location.replace("clasificaciones/serie-a.html");
    }else 

    if(id==="CL"){
        window.location.replace("torneos/champions.html?competicion=CL");
    }else 
    if(id==="WC"){
        window.location.replace("torneos/mundial.html?competicion=WC");
    }else 
    
    if(id!==undefined){
        console.log(id);
        window.location.replace("equipo/equipo.html?teamId="+id);
    }else {
        alert("No se encuentra el equipo / competicion introducida");
      }
})