// transform: translateX(value); moves an element horizontally (left or right) along the X-axis.
// pin : whenever we use pin the trigger only add parent page not h1 etc and then add start and end then scrub for smooth then add pin: true it lock the page until the animation of this text end | // locks the page while animating
gsap.to("#page2 h1",{
    transform :  "translateX(-150%)",    // transform: translateX(value); moves an element horizontally (left or right) along the X-axis.
    scrollTrigger: {
        trigger: "#page2",
        scroller:"body",
        start: "top 0%",
        end:"top -100%",
        scrub : 2,
        pin: true           // locks the page while animating

    }
})