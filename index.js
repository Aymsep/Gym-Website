/**/
const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.querySelector(".navbar")
let test = true;
toggle.addEventListener("click",()=>{
    navbarlinks.classList.toggle("active")
    /*test ==true? navbar.style.backgroundColor = "black":navbar.style.backgroundColor = ""
    test = !test*/
    navbar.classList.toggle("active")
})

window.addEventListener("scroll",()=>{
    let header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
})

/**/
window.addEventListener("scroll",()=>{
    let reveal = document.querySelectorAll(".fadein")
    for(let i = 0 ; i < reveal.length ; i++ ){
        let windheight = window.innerHeight;
        let revealtop = reveal[i].getBoundingClientRect().top;
        let revealpoint = 0;
        if(revealtop < windheight - revealpoint){
            reveal[i].classList.add("active")
        }else{
            reveal[i].classList.remove("active")
        }
    }
})
