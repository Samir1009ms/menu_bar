const mainBtn=document.querySelector(".hamburger")
const Mtop = document.querySelector(".menu-top")
const Mcenter = document.querySelector(".center")
const Mbottom = document.querySelector(".menu-bottom")
const navbar =document.querySelector(".menu-container")
const menubarcolor=document.getElementsByClassName(".menubar")
let say = 0
mainBtn.addEventListener("click", () => {
   
    if(say===0){
        Mtop.setAttribute("style", "transform: rotate(-46deg);margin-top: 24,5px;background-color: #f8982b;")
        Mcenter.setAttribute("style","transform: rotate(45deg);margin-top:-7px;background-color: #f8982b;")
        Mbottom.setAttribute("style", "transform: rotate(-45deg);opacity:0;background-color: #f8982b;")
        navbar.setAttribute("style","left:0")
        say++
    }
    else{
        Mtop.setAttribute("style", "transform: rotate(0)")
        Mcenter.setAttribute("style","transform: rotate(0);")
        Mbottom.setAttribute("style", "transform: rotate(0)")
        navbar.setAttribute("style","left:")
        say--
    }


})