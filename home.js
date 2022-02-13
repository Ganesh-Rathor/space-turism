function linHome(){
    document.querySelector(".Home").classList.add("bottom-line");
}
let explor = document.querySelector(".explor");
explor.addEventListener("click",function (){
    explor.setAttribute("src","destination-moon.html")
});