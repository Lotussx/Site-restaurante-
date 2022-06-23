var item1 = document.getElementById("m01")
var item2 = document.getElementById("m02")
var item3 = document.getElementById("m03")
var item4 = document.getElementById("m04")
var item5 = document.getElementById("m05")

var classe1 = document.querySelector(".menuCategorias ul li:nth-child(1)");
var classe2 = document.querySelector(".menuCategorias ul li:nth-child(2)");
var classe3 = document.querySelector(".menuCategorias ul li:nth-child(3)");
var classe4 = document.querySelector(".menuCategorias ul li:nth-child(4)");
var classe5 = document.querySelector(".menuCategorias ul li:nth-child(5)");


item1.addEventListener('click', function () {
    if (item1.classList.contains("selected02")) {
    } else {
        classe1.classList.add("barra");
        item1.classList.add("selected02");
        item2.classList.remove("selected02");
        item3.classList.remove("selected02");
        item4.classList.remove("selected02");
        item5.classList.remove("selected02");

        classe2.classList.remove("barra");
        classe3.classList.remove("barra");
        classe4.classList.remove("barra");
        classe5.classList.remove("barra");

    }
});

item2.addEventListener('click', function () {
    if (item2.classList.contains("selected02")) {
    } else {
        classe2.classList.add("barra");
        item2.classList.add("selected02");
        item1.classList.remove("selected02");
        item3.classList.remove("selected02");
        item4.classList.remove("selected02");
        item5.classList.remove("selected02");

        classe1.classList.remove("barra");
        classe3.classList.remove("barra");
        classe4.classList.remove("barra");
        classe5.classList.remove("barra");
    }
});

item3.addEventListener('click', function () {
    if (item3.classList.contains("selected02")) {
    } else {
        classe3.classList.add("barra");
        item3.classList.add("selected02");
        item2.classList.remove("selected02");
        item1.classList.remove("selected02");
        item4.classList.remove("selected02");
        item5.classList.remove("selected02");

        classe2.classList.remove("barra");
        classe1.classList.remove("barra");
        classe4.classList.remove("barra");
        classe5.classList.remove("barra");
    }
});

item4.addEventListener('click', function () {
    if (item4.classList.contains("selected02")) {
    } else {
        classe4.classList.add("barra");
        item4.classList.add("selected02");
        item2.classList.remove("selected02");
        item3.classList.remove("selected02");
        item1.classList.remove("selected02");
        item5.classList.remove("selected02");

        classe2.classList.remove("barra");
        classe3.classList.remove("barra");
        classe1.classList.remove("barra");
        classe5.classList.remove("barra");
    }
});

item5.addEventListener('click', function () {
    if (item5.classList.contains("selected02")) {
    } else {
        classe5.classList.add("barra");
        item5.classList.add("selected02");
        item2.classList.remove("selected02");
        item3.classList.remove("selected02");
        item4.classList.remove("selected02");
        item1.classList.remove("selected02");

        classe2.classList.remove("barra");
        classe3.classList.remove("barra");
        classe4.classList.remove("barra");
        classe1.classList.remove("barra");
    }
});

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

