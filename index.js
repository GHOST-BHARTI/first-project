var menu = document.querySelector(".panel-all")
var cross = document.querySelector("#full i")
let count = 1;


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var tl = gsap.timeline()
tl.to("#full",{
  left:"0",
  duration:0.4
})
tl.from("#full h4",{
  x:-150,
  duration:0.6,
  stagger:0.2,
  opacity:0
})
tl.from("#full i",{
  opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
  if (count%2 ===1 ){
    tl.play();
    count = count+1;
  }
  else{
    tl.reverse()
    count=count+1;
  }
  
})
cross.addEventListener("click",function(){
  tl.reverse();
  count = count+1;
})
var signIn = document.querySelector(".nav-signin");
var signinOpt = document.querySelector(".signin-opt");
signIn.addEventListener("click",function(){
})

let countSignin = 1;
var gl = gsap.timeline();
gl.to(".signin-opt",{
  top:"7.7vh",
  duration:0.4
})
gl.to(".triangle",{
  top:"4.6vh",
  duration:0.00000001
})
gl.from(".signin-opt h1",{
  y:-100,
  duration:0.5,
  stagger:0.2,
  opacity:0
})
gl.from(".signin-opt h3",{
  y:100,
  duration:0.4,
  stagger:0.15,
  opacity:0
})
gl.pause()

signIn.addEventListener("click",function(){
  if (countSignin%2 ===1 ){
    gl.play();
    countSignin = countSignin+1;
  }
  else{
    gl.reverse()
    countSignin=countSignin+1;
  }
  
})

