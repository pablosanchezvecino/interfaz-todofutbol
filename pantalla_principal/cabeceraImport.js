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
          <div class="col-2">
                
            <a class="btn btn-dark" href="./pantalla_principal.html"><h2>TodoFutbol</h2></a>  
          </div>
          <div class="col-2">
            <a class="btn btn-dark inline-block" style="vertical-align: middle;" href="./pantalla_principal.html">
              <img src="../house.png" style="vertical-align: middle;">
              <span class="fs-5 mx-2" style="vertical-align: middle;">Pantalla principal</span>
            </a>
            
          </div>  
        <!--<h2 class="col-3">TodoFutbol</h2>-->
          <div class="col-4 busqueda">
            <form autocomplete="off">
              <div class="input-group">
                <input type="search" id="myInput" class="form-control" placeholder="Introduce equipo o liga..." style="border-top-right-radius: 0; border-bottom-right-radius: 0 ">
                <span class="btn btn-outline-secondary" id="busqueda" style="border-top-left-radius: 0; border-bottom-left-radius: 0 ">Buscar</span>
              </div>
            </form>
          </div>


          <div class="col-2">
            <button hidden id="dropdown" class="btn btn-dark mx-5 dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Equipos Favoritos </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Partidos</a></li>
              <li><a class="dropdown-item" href="#">Equipos</a></li>
            </ul>
          </div>
          <div class="col-2 d-flex flex-wrap float-end">
              <!--<input type="button" aria-describedby="login" class="form-control">-->
              <a class="btn btn-dark fs-5" id="login" aria-describedby="login" href="../login.html">Iniciar Sesion</a>
              <button hidden class="input-group-text" id="logout">
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
          login.textContent="Sesion iniciada";
          logout.hidden=false;
      }

      logout.addEventListener("click", (e)=>{

          e.preventDefault();
          sessionStorage.removeItem("active");
          window.location.replace("pantalla_principal.html");

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
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
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

    var opciones=["Barcelona", "Real Madrid", "Atlético de Madrid", "Real sociedad", "", "", "", "", "", "", "", "", "", "", ""];

    autocomplete(document.getElementById("myInput"), opciones);
    
    </script>
  

`);