/* TimeLine M.I. in GSAP  : what does it do ?
 so basically when you run one object animation
 with delay and duration and you want second
 object run just after first end so you need 
 to manually calculate it but from timeline 
 you can just line wise go it automatically 
 run the next object when first end  */

let tl = gsap.timeline();

tl.to("#box1", {
    x:900 , 
    duration:1.5 , 
    delay : 1 , 
    rotate:360 
})
tl.to("#box2", {
    x:900 , 
    duration:1.5 , 
    rotate:360 
})
tl.to("#box3", {
    x:900 , 
    duration:1.5 , 
    rotate:360 
})

