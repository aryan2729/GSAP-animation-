gsap.from("h1" , {          // this apply to all h1

    opacity: 0 ,
    y : 30 ,
    duration : 2 , 
    delay : 1,
    stagger : 0.4         // this helps to run all h1 line by line | stagger : -1 opposite run karega as h1 written in code opposite

})


// repeat:1 animate 2 times cuz 1 time run hoga he and if repeat: -1 then infinite repeat start to end 

gsap.to("#box1" , {
    x:800 , 
    duration:2 , 
    delay : 3,
    rotate:360 , 
    repeat : 1              // repeat 1 means run 2 times 

})

gsap.to("#box2" , {
    x:900 , 
    duration : 2 , 
    delay : 8 , 
    rotate : 360 , 
    repeat : -1         // infinite run start to end 
}
)

// repeat -1 infinite loop
// yoyo means first go start to end then end to start then start to end repeat 
gsap.to("#box3", {
    x: 400 ,
    duration : 2 , 
    delay: 13 , 
    rotate: 360 ,
    repeat:-1 ,         // repeat -1 infinite loop
    yoyo: true          // yoyo means first go start to end then end to start then start to end repeat 
    
})

