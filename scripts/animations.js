function MiFuncion(){
    document.getElementById("Menu_Deslizante").classList.toggle("show");
}


window.onclick = function (event){
    if (!event.target.matches('.menu_container')){
        var dropdowns = document.getElementsByClassName("menu_panel");
        var i;
        for (i = 0; i <dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove("show");
            }
        }
    }
}

// *************************** ANIMACIÓN DE SALIDA

var menu = document.getElementById("Menu_Deslizante");
menu.addEventListener("onclick", ocultar)
    
function ocultar() {
    alert("hola a todos soy cj");
}
