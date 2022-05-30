document.write(`

<header class="container-fluid text-bg-dark px-2 py-2 ">
        
<div class="row d-flex flex-wrap align-items-center">
    <a class="btn btn-dark col-3" href="pantalla_principal/pantalla_principal.html"><h2>TodoFutbol</h2></a>  
  <!--<h2 class="col-3">TodoFutbol</h2>-->
    <div class="col-4 d-flex flex-wrap">
        <div class="input-group px-5">
            <input type="search" class="form-control" placeholder="Introduce equipo o liga..." style="border-top-right-radius: 0; border-bottom-right-radius: 0 ">
            <span class="btn btn-outline-secondary" id="busqueda" style="border-top-left-radius: 0; border-bottom-left-radius: 0 ">Buscar</span>
        </div>
          
    </div>
    <div class="col-3">
      <button class="btn btn-dark mx-5 dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Equipos Favoritos </button>
      <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Clasificacion</a></li>
        <li><a class="dropdown-item" href="#">Partidos</a></li>
        <li><a class="dropdown-item" href="#">Equipos</a></li>
      </ul>
    </div>
    <div class="col-2 d-flex flex-wrap float-end">
        <!--<input type="button" aria-describedby="login" class="form-control">-->
        <a class="btn btn-dark" aria-describedby="login" href="login.html">Iniciar Sesion</a>
        <a class="input-group-text" id="login">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
          </svg>
        </a>
    </div>
</div>

</header>
  

`);