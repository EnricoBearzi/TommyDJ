var gallery = document.querySelector('#gallery');
var getStyleVal = function (elemento, style) { return parseInt(window.getComputedStyle(elemento).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altezza = getStyleVal(gallery, 'grid-auto-rows');
    var gap = getStyleVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var elemento = item;
        elemento.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altezza + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.addEventListener('load', function () {
        var altezza = getStyleVal(gallery, 'grid-auto-rows');
        var gap = getStyleVal(gallery, 'grid-row-gap');
        var genitoreItem = item.parentElement.parentElement;
        genitoreItem.style.gridRowEnd = "span " + Math.ceil((getHeight(genitoreItem) + gap) / (altezza + gap));
    });
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
resizeAll();

let observerImage = new IntersectionObserver((elementi)=>{
    elementi.forEach((elemento)=>{
        if(elemento.isIntersecting) {
            elemento.target.classList.add("animationBlurTrue");
        } else {
            elemento.target.classList.remove("animationBlurTrue");
        }
    })
})

const imagesScroll = document.querySelectorAll('.gallery-item');
imagesScroll.forEach((el)=> {
    observerImage.observe(el)
})