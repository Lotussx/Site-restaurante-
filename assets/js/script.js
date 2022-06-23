$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// Lógica para tornar o menu mobile visivél

var menu = document.getElementById("menuMobile");
var menu2 = document.getElementById("menuHeader")

menu.addEventListener('click', function(){
    if (menu.classList.contains("selected01")){
        menu.classList.remove("selected01");
        menu2.classList.remove("selected01");
    }else{
        menu.classList.add("selected01");
        menu2.classList.add("selected01");
    }

});




