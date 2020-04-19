/*-------------kabl rihla*/
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
/////
$(document).ready(function () {
    $('#sub').on('show.bs.collapse', function () {
        $('#sub .collapse').collapse('hide')
    })
});
///////
$(document).ready(function () {
    $('#sub2').on('show.bs.collapse', function () {
        $('#sub2 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub3').on('show.bs.collapse', function () {
        $('#sub3 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub4').on('show.bs.collapse', function () {
        $('#sub4 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub5').on('show.bs.collapse', function () {
        $('#sub5 .collapse').collapse('hide')
    })
});
/////
$(document).ready(function () {
    $('#sub6').on('show.bs.collapse', function () {
        $('#sub6 .collapse').collapse('hide')
    })
});
/////
var acc = document
    .getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {

        this.classList.toggle("active2");
        this.nextElementSibling.classList
            .toggle("show");
    }
};
//----nav manasikomra

//--------nav mobil
function myFunction2() {
    var x = document.getElementById("div-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//
//------manasik----
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");



    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");

    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active2";

}

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
