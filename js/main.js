$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('.nav').addClass("fixed-top");
        } else {
            $('.nav').removeClass("fixed-top");
        }
    });
    $('.list').click(function () {
        $('.flexc').addClass("flexr");
        $('.adv').addClass("advlist");
        $('.info').addClass("infolist");
        $(this).addClass("active");
        $('.grid').removeClass("active");
    });
    $('.grid').click(function () {
        $('.flexc').removeClass("flexr");
        $('.adv').removeClass("advlist");
        $('.info').removeClass("infolist");
        $(this).addClass("active");
        $('.list').removeClass("active");
    });
    $('.menubtn').click(function () {
        $('.menu-nav').addClass("overlay");
        $('.side-menu').addClass("inscreen");
        $('.side-menu').removeClass("outscreen");
        $('body').css("overflow", "hidden");
    });
    $('.menu-nav').click(function () {
        $(this).removeClass("overlay");
        $('.side-menu').addClass("outscreen");
        $('.side-menu').removeClass("inscreen");
        $('body').css("overflow", "auto");
    });
    $('.close').click(function () {
        $('.menu-nav').removeClass("overlay");
        $('.side-menu').addClass("outscreen");
        $('.side-menu').removeClass("inscreen");
        $('body').css("overflow", "auto");
    });
    $(".side-menu").click(function (e) {
        e.stopPropagation();
    });
    $('.searchbtn').click(function () {
        $('.over').addClass("down");
        $('.over').removeClass("up");
        $('body').css("overflow", "hidden");
    });
    $('.over').click(function () {
        $(this).addClass("up");
        $(this).removeClass("down");
        $('.side-menu').removeClass("inscreen");
        $('body').css("overflow", "auto");
    });
    $(".xs-search").click(function (e) {
        e.stopPropagation();
    });
    if ($(window).width() < 768) {
        $(".aboutheader").addClass("accordion");
        $(".about").addClass("panel");
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    if ($(window).width() < 768) {
        $(".brands-item").addClass("owl-carousel");
        $('.brands-item').owlCarousel({
            items: 1,
            autoplay: true,
            rtl: true,
            loop: true,
            nav: false,
            dots: true,
            navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 2,
                },
                550: {
                    items: 4,
                },
            }
        });
    } else {
        $(".brands-item").removeClass("owl-carousel");
    }
});