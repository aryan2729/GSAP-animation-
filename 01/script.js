// Gsap.to -> inital to final | gsap.from -> final to initial 

gsap.to("#box1", {
    x : 1000 ,
    duration : 2,
    delay : 1
})

gsap.to("#box2", {
    x: 500 ,
    y:450,              // here y: 500 means downward 500 in y axis not think -ve and +ve axis here | y : 500 means downward 
    duration : 2 , 
    delay : 2
})

// gsap.from -> final to initial 

gsap.from("#box3", {
    x : 1200 ,
    duration : 4 , 
    delay : 3               // delay means it's first w8 for 3 sec then start 
})

gsap.to("#box4" , {
    x : 900 , 
    duration : 2 , 
    delay : 7 ,
    rotate : 360 ,      // it means it rotate 360 till animation end 
    backgroundColor : "yellow",
    borderRadius : "50%"        // means it convert to circle after reached final positoin 

})

// scale -> means size of object convert to this e.g. scale: 2 means size of object convert to double 

gsap.to("#box5", {
    x : 800 , 
    rotate : 360 , 
    delay : 10 , 
    duration: 4 , 
    backgroundColor : "white",
    scale : 3               // means size of object become trice 3 
})

gsap.to("#box6 ", {
    x : 1300 , 
    rotate : 360 , 
    delay : 15, 
    duration : 3 , 
    backgroundColor : "green",
    scale : 0.5,             // means size become half of original 1 -> 0.5 
    borderRadius:"50%"      // means become circle 
})