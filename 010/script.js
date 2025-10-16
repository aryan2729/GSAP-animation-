var tl = gsap.timeline();



tl.from("nav h1, nav h4 , nav button", {
    y:-30,
    opacity: 0 ,
    duration:0.5,
    delay:0.3,
    stagger:0.15
})

tl.from(".center-part1 h1", {
    x: -200 , 
    opacity: 0 , 
    duration: 0.4 , 
})

tl.from(".center-part1 p", {
    x: -100 , 
    opacity: 0 , 
    duration: 0.4 , 
})

tl.from(".center-part1 button", {

    opacity: 0 , 
    duration: 0.4 , 
})

tl.from(".center-part2 img", {
    opacity: 0 , 
    duration: 0.5
}, "-=0.3")           // it means in timeline it give delay of 1 sec 

tl.from(".section1bottom img",{
    opacity:0, 
    y:30 , 
    stagger:0.15,
    duration:0.5
})


// adding scrollTrigger thing in timeline so we can use it and we don't need to repeat in every code 
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"bottom 90%",
        scrub : 2,

    }
})

tl2.from(".services ",{
    y:30,
    opacity:0 
})

// This .left and .right both below not coming at same time so add any comment in ({}, "here") and it should be in both what you wated to show on same time
tl2.from(".elem.line1.left",{
    x:-300 , 
    opacity:0 ,
    duration:1
},"random")         // both same time work write anything but should be in both 

tl2.from(".elem.line1.right",{
    x:300 , 
    opacity:0 ,
    duration:1 
},"random")

tl2.from(".elem.line2.left",{
    x:-300 , 
    opacity:0 ,
    duration:1
},"random")        

tl2.from(".elem.line2.right",{
    x:300 , 
    opacity:0 ,
    duration:1 
},"random")


tl.from(".whole", {
    y:300 , 
    opacity:0,
    duration:0.5,
    scrollTrigger : {
        trigger:".whole",
        scroller:"body",
        start:"top 80%",
        end:"bottom 95%",
        scrub:2
    },
    rotate:8
})

tl.from(".blackbox ",{
    y:300,
    opacity:0 ,
    scrollTrigger : {
        trigger:".whole",
        scroller:"body",
        start:"top 25%",
        end:"bottom 90%",
        scrub:2
    },
})


