'use strict'
/**Loader function */
document.onreadystatechange = () =>{
    if(document.readyState != "complete"){
        document.querySelector("#load").style.visibility="visible";
        document.body.style.visibility="hidden";
        
    }
    else{
        document.querySelector("#load").style.visibility="hidden"
        document.body.style.visibility="visible";
    }
}
/**Loader function */



var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

/**opening and closing sidenav */
let openNav = function () {
    document.getElementById("sideNav").style.width = "576px";
    
}
const closeNav = function() {
    document.getElementById("sideNav").style.width = "0";
}
/**opening and closing sidenav */
