// *****************  MENU PARA MOVILES  *****************
const lateral_menu = document.querySelector(".header_container")
const botoncito = document.getElementById("btn_menu")

/* PODEMOS TRAER ELEMENTOS POR "ID" O "querySelector (clase)" */


botoncito.addEventListener("click", leftRight);


function leftRight(){
    if (lateral_menu.classList.contains("menu-appear")){

        lateral_menu.classList.remove("menu-appear")
        lateral_menu.classList.add("menu-disappear")
    } else{
        lateral_menu.classList.remove("menu-disappear")
        lateral_menu.classList.add("menu-appear")
    }
}

// *****************  DESPLEGABLES PARA OPCIONES DEL MENÚ  *****************
