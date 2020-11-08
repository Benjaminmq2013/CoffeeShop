const products_menu = document.querySelector(".product_selector");
const options_menu = document.querySelector(".options_container");

products_menu.addEventListener("click", show_hide)

function show_hide(){
    if (options_menu.classList.contains("options_show")){
        options_menu.classList.remove("options_show")
        options_menu.classList.add("options_hide")
    }else{
        options_menu.classList.add("options_show")
        options_menu.classList.remove("options_hide")
    }
}