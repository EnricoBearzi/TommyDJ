let observer1 = new IntersectionObserver((elementi)=>{
    elementi.forEach((elemento)=>{
        if(elemento.isIntersecting) {
            elemento.target.classList.add("scrollAnimationTrue1");
            console.log("add");
        } else {
            elemento.target.classList.remove("scrollAnimationTrue1");
            console.log("remove")
        }
    })
})

let observer2 = new IntersectionObserver((elementi)=>{
    elementi.forEach((elemento)=>{
        if(elemento.isIntersecting) {
            elemento.target.classList.add("scrollAnimationTrue2");
            console.log("add");
        } else {
            elemento.target.classList.remove("scrollAnimationTrue2");
            console.log("remove")
        }
    })
})

const scrollAnimationElements1 = document.querySelectorAll('.scrollAnimation1');
scrollAnimationElements1.forEach((el)=> {
    observer1.observe(el)
})

const scrollAnimationElements2 = document.querySelectorAll('.scrollAnimation2');
scrollAnimationElements2.forEach((el)=> {
    observer2.observe(el)
})