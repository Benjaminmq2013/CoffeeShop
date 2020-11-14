const portafolios = document.getElementById("Portfolio_Option")
const coffee_store = document.getElementById("CoffeeOption")
const digital_product = document.getElementById("DP-Option")
const project3 = document.getElementById("Project3-Option")

portafolios.addEventListener("click", MyPortfolio);
coffee_store.addEventListener("click", MyCoffee)
digital_product.addEventListener("click", my_product)
project3.addEventListener("click", my_project)

function MyPortfolio (){    
    window.open("https://benjaminmq2013.github.io/", "_self");    

    coffee_store.classList.remove("option-border")
    portafolios.classList.add("option-border")
}

function MyCoffee (){
    window.open("https://benjaminmq2013.github.io/CoffeeShop/", "_self")
}

function my_product(){
    window.open("https://benjaminmq2013.github.io/Digital_product/", "_self")
}

function my_project(){
    window.open("", "_self")
}


//      ******TRAYENDO PSEUDO ELEMENTOS******



colorClassName = "dark"

coffee_store.addEventListener("mouseover", () =>{
    coffee_store.classList.add(colorClassName)
})

coffee_store.addEventListener("mouseout", () =>{
    coffee_store.classList.remove(colorClassName)
})


//      ********** PORTAFOLIOS **********
portafolios.addEventListener("mouseover", () =>{
    portafolios.classList.add(colorClassName)
})

portafolios.addEventListener("mouseout", ()=>{
    portafolios.classList.remove(colorClassName)
})



//      ********** Digital Product *********
digital_product.addEventListener("mouseover", () =>{
    digital_product.classList.add(colorClassName)
})
digital_product.addEventListener("mouseout", () =>{
    digital_product.classList.remove(colorClassName)
})


//      ************ project 3 ***********
project3.addEventListener("mouseover", () =>{
    project3.classList.add(colorClassName)
})

project3.addEventListener("mouseout", () =>{
    project3.classList.remove(colorClassName)
})