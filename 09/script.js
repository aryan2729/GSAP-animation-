var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i");


var tl = gsap.timeline();

tl.to("#full", {
    right:0,
    duration:0.4,
})

tl.from("#full h4",{
    x: 400,
    duration:0.3,
    stagger:0.23,
    opacity:0
})

tl.from("#full i",{
    opacity:0
})

tl.pause();     // timeline pause | stopped all animation

// this work the menu animatoin when i click on menu button 
menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse();       // reverse Animation end 
})