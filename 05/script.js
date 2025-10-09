// page 1 div inside box 
gsap.from("#page1 #box",{
    scale : 0 , 
    delay: 1, 
    duration : 2 , 
    rotate : 360 
})


// scrollTrigger -> Whenever we come to next page then animation start for that page object not defualt 
// trigger : means in which page or text or box you need to add this 
// scroller : mainly body cuz body scroll 
// start :    // it means whenver _% page show on screen then animation start
gsap.from("#page2 #box",{
    scale : 0 , 
    duration : 2 , 
    rotate : 360 ,
    scrollTrigger: {
        trigger: "#page2 #box",         // page 2 box animate 
        scroller: "body",
        markers: true ,                 // only show marker on right side of screen for animation thing 
        start: "top 60%"               // it means whenver 60% page show on screen then animatoin start

    }
})
gsap.from("#page3 #box",{
    scale : 0 , 
    duration : 2 , 
    rotate : 360 ,
    scrollTrigger: {
        trigger: "#page2 #box",         // page 2 box animate 
        scroller: "body",
        markers: true ,                
        start: "top 70%"               // it means whenver 60% page show on screen then animatoin start

    }
})