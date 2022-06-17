document.write(`

<style>
* {
  box-sizing: border-box;
}

body {
  font: 16px Arial;  
}


.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: rgb(0, 0, 0); 
  border-bottom: 1px solid #d4d4d4; 
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #504e4e; 
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: #504e4e !important; 
  color: #ffffff; 
}

.busqueda {
  padding-left: 6.5%;
  padding-right: 6.5%;;
}
</style>

<header class="container-fluid text-bg-dark px-2 py-2 ">
  
<div class="row d-flex flex-wrap align-items-center">
<div class="col-4">
            <a class="btn btn-dark" href="pantalla_principal/pantalla_principal.html" style="vertical-align: middle;">
              <img src="../res/logo.png" height="50" style="vertical-align: middle;" />
              <span class="ms-1 align-middle m-0 p-0 fs-1" style="vertical-align: middle;">TodoFutbol</span>
            </a>
          </div>

          <div class="col-4 busqueda">
            <div class="input-group" id="form">
              <input autocomplete="off" type="search" id="myInput" class="form-control" placeholder="Introduce equipo o competición..." style="border-top-right-radius: 0; border-bottom-right-radius: 0 ">
              <button type="submit" class="btn btn-outline-secondary fs-5" id="busqueda" style="border-top-left-radius: 0; border-bottom-left-radius: 0; --bs-btn-color: #ffffff">Buscar</button>
            </div>
          </div>


          <div class="col-2">

          <a hidden id="dropdown" class="btn btn-dark" href="../equipo/equipos_favoritos.html" style="vertical-align: middle;">
            <img src="../res/icono-favoritos.png" height="50" style="vertical-align: middle;" />
            <span class=" align-middle m-0 p-0 fs-5" style="vertical-align: middle;">Favoritos </span>
          </a>
  
  
        </div>
          <div class="col-2 d-flex flex-wrap justify-content-end pe-5">
              
              <a class="btn btn-dark fs-5" id="login" aria-describedby="login" href="../login.html">Acceder</a>
              <button hidden class="input-group-text" id="logout" title="Cerrar sesión">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>
              </button>
          </div>
</div>
  
</header>




<script>
const dropdown = document.getElementById("dropdown");

if(sessionStorage.getItem("active")){
  sesion = sessionStorage.getItem("active");
  dropdown.hidden=false;
} else {
    console.log("No esta logeado");
}

const login = document.getElementById("login");
const logout = document.getElementById("logout");
if(sessionStorage.getItem("active")!==null){
    login.href="";
    username = JSON.parse(sessionStorage.getItem("active")).username;
          if(username.length>=9){
              shortUsername="";
              for(i=0; i<=5; i++){
                shortUsername+=username[i];
              }
              for(i=0; i<3; i++){
                shortUsername+=".";
              }
              login.textContent="Bienvenido, "+shortUsername;
              login.title="Bienvenido, "+username;
          } else {
              login.textContent="Bienvenido, "+username;
          }
    logout.hidden=false;
}

logout.addEventListener("click", (e)=>{

    e.preventDefault();
    sessionStorage.removeItem("active");
    window.location.replace("../../pantalla_principal/pantalla_principal.html");
    alert("Sesión cerrada");

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
            window.location.replace("../clasificaciones/laliga.html");
          } else
          if(id==="FL1"){
              window.location.replace("../clasificaciones/ligue-1.html");
          } else
          if(id==="PL"){
              window.location.replace("../clasificaciones/premier-league.html");
          } else
          if(id==="BL1"){
              window.location.replace("../clasificaciones/bundesliga.html");
          }else
          if(id==="SA"){
              window.location.replace("../clasificaciones/serie-a.html");
          }else 
      
          if(id==="CL"){
              window.location.replace("../torneos/champions.html?competicion=CL");
          }else 
          if(id==="WC"){
              window.location.replace("../torneos/mundial.html?competicion=WC");
          }else 
          
          if(id!==undefined){
              console.log(id);
              window.location.replace("../equipo/equipo.html?teamId="+id);
          }else {
            alert("No se encuentra el equipo / competicion introducida");
          }
      })
</script>

<script>


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();

              id = ht.get(myInput.value);
    
              if(id==="PD"){
                window.location.replace("../clasificaciones/laliga.html");
              } else
              if(id==="FL1"){
                  window.location.replace("../clasificaciones/ligue-1.html");
              } else
              if(id==="PL"){
                  window.location.replace("../clasificaciones/premier-league.html");
              } else
              if(id==="BL1"){
                  window.location.replace("../clasificaciones/bundesliga.html");
              }else
              if(id==="SA"){
                  window.location.replace("../clasificaciones/serie-a.html");
              }else 
          
              if(id==="CL"){
                  window.location.replace("../torneos/champions.html?competicion=CL");
              }else 
              if(id==="WC"){
                  window.location.replace("../torneos/mundial.html?competicion=WC");
              }else 
              
              if(id!==undefined){
                  console.log(id);
                  window.location.replace("../../equipo/equipo.html?teamId="+id);
              }else {
                alert("No se encuentra el equipo / competicion introducida");
              }
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          //and simulate a click on the "active" item:
          if (x) x[currentFocus].click();
        }

        id = ht.get(myInput.value);
    
        if(id==="PD"){
          window.location.replace("../clasificaciones/laliga.html");
        } else
        if(id==="FL1"){
            window.location.replace("../clasificaciones/ligue-1.html");
        } else
        if(id==="PL"){
            window.location.replace("../clasificaciones/premier-league.html");
        } else
        if(id==="BL1"){
            window.location.replace("../clasificaciones/bundesliga.html");
        }else
        if(id==="SA"){
            window.location.replace("../clasificaciones/serie-a.html");
        }else 
    
        if(id==="CL"){
            window.location.replace("../torneos/champions.html?competicion=CL");
        }else 
        if(id==="WC"){
            window.location.replace("../torneos/mundial.html?competicion=WC");
        }else 
        
        if(id!==undefined){
            console.log(id);
            window.location.replace("../../equipo/equipo.html?teamId="+id);
        }else {
          alert("No se encuentra el equipo / competicion introducida");
        }

      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

var opciones=["Real Madrid", "Barça", "Atlético de Madrid", "Sevilla", "Real Betis", "Real Sociedad", "Villareal", "Athletic", "Valencia", "Osasuna", 
    "Celta", "Rayo Vallecano", "Elche", "Espanyol", "Getafe", "Cádiz", "Mallorca", "Granada", "Levante", "Alavés",
    "Manchester City", "Liverpool", "Chelsea", "Tottenham", "Arsenal", "Manchester United", "West Ham", "Leicester", "Brighton Hove", "Wolverhampton",
    "Newcastle", "Crystal Palace", "Brentford", "Aston Villa", "Southampton", "Everton", "Leeds", "Burnley", "Watford", "Norwich",
    "Bayern München", "Dortmund", "Leverkusen", "Leipzig", "Union Berlin", "Freiburg", "Köln", "Mainz", "Hoffenheim", 
    "Mönchengladbach", "Frankfurt", "Wolfsburg", "Bochum", "Augsburg", "Stuttgart", "Hertha", "Bielefeld", "Greuther Fürth",
    "PSG", "Marseille", "Monaco", "Nice", "Rennais", "Strasbourg", "Olympique Lion", "Lens", "Nantes", "Lille",
    "Brest", "Reims", "Montpellier", "Angers", "Troyes", "Lorient", "Clermont", "Saint-Étienne", "Metz", "Bordeaux",
    "Milan", "Inter", "Napoli", "Juventus", "Lazio", "Roma", "Fiorentina", "Atalanta", "Verona", "Torino",
    "Sassuolo", "Udinese", "Bologna", "Empoli", "Sampdoria", "Spezia", "Salernitana", "Cagliari", "Genoa", "Venezia",
    "La Liga", "Ligue 1", "Bundesliga", "Premier League", "Serie A", "Champions League", "Worldcup 2022"];

autocomplete(document.getElementById("myInput"), opciones);

</script>

`);