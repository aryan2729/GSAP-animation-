gsap.from("#page2 h1",{
    opacity: 0 , 
    duration: 1,
    x : 500 , 
    scrollTrigger: {
        trigger : "#page2 h1",
        scroller : "body",
        start: "top 50%"
    }
})
gsap.from("#page2 h2",{
    opacity: 0 , 
    duration: 1,
    x : -500 , 
    scrollTrigger: {
        trigger : "#page2 h2",
        scroller : "body",
        start: "top 50%"
    }
})

// scrub -> whenever we want to animate the object accordint to scroller then add this scrub and give 2 for smooth or whatever suits you for e.g. Apple site animation works only when we scroll 

gsap.from("#page2 #box", {
    scale: 0 , 
    opacity: 0 , 
    duration:1 , 
    rotate: 360 , 
    scrollTrigger: {
        trigger : "#page2 #box",
        scroller: "body",
        start:"top 50%",
        end:"top 30%",
        scrub: 2            // scrub -> whenever we want to animate the object accordint to scroller then add this scrub and give 2 for smooth or whatever suits you for e.g. Apple site animation works only when we scroll 
    }
})
