let body = document.querySelector("body")
let theme_logo = document.querySelector(".theme-logo")
let h1 = document.querySelector('h1')
let description = document.querySelector('.description')
let logo = document.querySelector('.logo')
let button = document.querySelector("button")
let h2 =document.querySelector("h2") 
let my_paragraph =document.querySelector(".my-paragraph")
let x = document.querySelector(".x")

theme_logo.addEventListener("click", (e)=>{
    console.log("clicked")
    body.style.background = "black"
    description.style.color = "white"
    logo.style.color = "white"
    h1.style.color = "white"
    button.style.color = "white"
    button.style.border = "2px solid red"
    h2.style.color = "white"
    my_paragraph.style.color = "white"
    theme_logo.style.color = "white"

    x.innerHTML = `<ion-icon class="light-theme-icon" name="sunny-outline"></ion-icon>`
    let light_theme_icon = document.querySelector(".light-theme-icon");
    light_theme_icon.style.color = "white"
    light_theme_icon.style.fontsize = "2 rem"

    light_theme_icon.addEventListener("click", (e)=>{
    body.style.background = "white"
    description.style.color = "black"
    logo.style.color = "black"
    h1.style.color = "black"
    button.style.color = "black"
    button.style.border = "2px solid black"
    h2.style.color = "white"
    my_paragraph.style.color = "black"
    theme_logo.style.color = "black"
    })


})