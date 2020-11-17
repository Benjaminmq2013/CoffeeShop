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
    selection_rotate()
}

//      ******************** Cantidad del producto - control ********************
const btn_more = document.getElementById("btn_more")
const btn_less = document.getElementById("btn_less")
const quantity_displaying = document.getElementById("quantity_displaying")
const final_priceh3 = document.getElementById("final_priceh3"); //Muestra el producto (h3)

btn_more.addEventListener("click", add_product)
btn_less.addEventListener("click", substract_product)


let quantity_num = 1;
let price = 17.99;
function add_product(){
    quantity_num +=1;
    quantity_displaying.textContent=quantity_num
    
    price = (price + 17.99);
    final_priceh3.textContent=("$"+price.toFixed(2));
}

function substract_product(){
    if (quantity_num > 1){
        quantity_num -=1;
        price = (price - 17.99);        
    } 
    
    quantity_displaying.textContent=quantity_num
    
    
    final_priceh3.textContent=("$"+price.toFixed(2));
}

/**********  ROTANDO ICONO DEL MENÚ DE SELECCIÓN  *********/
const selection_icon = document.querySelector(".selection_icon")
selection_icon.addEventListener("click", show_hide)
function selection_rotate(){
    selection_icon.classList.toggle("selection_icon-rotate");
}



/************  FUNCION DE LAS OPCIONES DEL MENÚ (SELECCIONIAR PRODUCTO)  ************ */
const product_option_moka = document.getElementById("product-option_moka")
const product_option_java = document.getElementById("product-option_java")
const product_option_kenia = document.getElementById("product-option_kenia")
const product_option_tarrazu = document.getElementById("product-option_tarrazu")
const product_option_peaberry = document.getElementById("product-option_peaberry")

const selected_product_name = document.getElementById("selected_product_name");

const verification_check = document.getElementById("verification_check")

const coffee_bag = document.getElementById("coffee_bag");
coffee_bag.addEventListener("click", show_hide)

h3_selected_text = document.getElementById("h3_selected_text");

product_option_moka.addEventListener("click", select_moka)
product_option_java.addEventListener("click", select_java)
product_option_kenia.addEventListener("click", select_kenia)
product_option_tarrazu.addEventListener("click", select_tarrazu)
product_option_peaberry.addEventListener("click", select_peaberry)

function select_moka(){
    selected_product.src=("../resources/moka.webp");
    show_hide()
    h3_selected_text.textContent="Moka Seleccionado"
    selected_product_name.textContent="Moka"

    verification_check.classList.remove("check_dissapear")
    verification_check.classList.add="check_appear"
}

function select_java(){
    selected_product.src=("../resources/java.jpg");
    show_hide()
    h3_selected_text.textContent="Java Seleccionado"
    selected_product_name.textContent="Java"

    verification_check.classList.remove("check_dissapear")
    verification_check.classList.add="check_appear"
}

function select_kenia (){
    selected_product.src=("../resources/kenia.jpg")
    show_hide()
    h3_selected_text.textContent="Kenia Seleccionado"
    selected_product_name.textContent="Kenia"

    verification_check.classList.remove("check_dissapear")
    verification_check.classList.add="check_appear"
}

function select_tarrazu (){
    selected_product.src=("../resources/tarrazu.jpg");
    show_hide();
    h3_selected_text.textContent="Tarrazú Seleccionado"
    selected_product_name.textContent="Tarrazú"

    verification_check.classList.remove("check_dissapear")
    verification_check.classList.add="check_appear"
}

function select_peaberry(){
    selected_product.src=("../resources/peaberry.jpg");
    show_hide();
    h3_selected_text.textContent="Peaberry Seleccionado"
    selected_product_name.textContent="Peaberry"
    
    verification_check.classList.remove("check_dissapear")
    verification_check.classList.add="check_appear"
}