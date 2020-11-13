const main_menu = document.getElementById("Menu_Deslizante") //Position swipeUp, SwipeDown
const main_menu_color = document.querySelector(".menu_container-d") //Opacidad
const main_menu_color2 = document.querySelector(".menu_opacity") //Opacidad (del boton)


function MiFuncion(){
    if (main_menu.classList.contains("show")){
        main_menu.classList.remove("show");
        main_menu.classList.add("hidde");
        
    } else{
        main_menu.classList.add("show")
        main_menu.classList.remove("hidde");
    }
    
main_menu_color.classList.add("menu-opacity");
main_menu_color2.classList.toggle("menu-opacity")    
    rotate()
}


//  *********** ANIMANDO FLECHA DEL MENÚ (arrow-rotate)
const arrow_menu = document.getElementById("arrow_menu")
// arrow_menu.addEventListener("click", rotate)
function rotate(){
    arrow_menu.classList.toggle("arrow_rotate")    
}




/*/
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

*/