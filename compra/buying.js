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

