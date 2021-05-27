
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


/**opening and closing sidenav */
let openNav = function () {
    document.getElementById("sideNav").style.width = "700px";
    document.getElementById("main").style.marginLeft = "700px";
    
}
const closeNav = function() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
/**opening and closing sidenav */

/**Close sidenav with escape key function */
document.addEventListener('keydown' , function(e){
    if(e.key === 'Escape'){
        closeNav()
    }
})
/**Close sidenav with escape key function */

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}