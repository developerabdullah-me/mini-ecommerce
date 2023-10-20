$(document).ready(function(){

    // Header Scroll
    let nav = document.querySelector(".navbar");
    let scrollTopButton = document.querySelector("#scrollUp");

    // NavHide
    let navBar = document.querySelectorAll(".nav-link");
    let navCollapse = document.querySelector(".navbar-collapse.collapse");

    window.onscroll = function () {


        var scroll = document.documentElement.scrollTop;

        if (scroll >=  150) {
            nav.classList.add("header-scrolled");
        } else {
            nav.classList.remove("header-scrolled");
        }

        if(scroll >= 250){
                scrollTopButton.classList.add('scrollActive');
        } else{
                scrollTopButton.classList.remove('scrollActive');
        }
    }

    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        })
    })

    // Hero Slider Active
    $('.hero-slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        items: 1,
        responsive:{
            0:{
                nav:false,
                autoplay: true,
                autoplayTimeout:3000,
            },
            768:{
                nav:true,
                autoplay: false,
            }
        }
    })

    // Arrival Slider Active
    $('.arrival-slider-active').owlCarousel({
        loop:true,
        margin: 38.5,
        nav:true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        dots: false,
        responsive:{
            0:{
                items:2,
                margin: 20
            },
            576:{
                items:2,
                margin: 20,
            },
            768:{
                items:3,
                margin: 25,
            },
            992:{
                items:4,
                margin: 30,
            },
            1200:{
                items:4,
                margin: 38.5,
            }
        }
    })

    // Brands Slider Active
    $('.brands-active').owlCarousel({
        loop:true,
        margin: 24.5,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3,
                margin: 0,
            },
            768:{
                items:4,
                margin: 5
            },
            992:{
                items:5,
                margin: 5,
            },
            1200:{
                items:5,
                margin: 24.5,
            }
        }
    })

    // Feedback Slider Active
    $('.active-feedback-slider').owlCarousel({
        loop:true,
        margin: 24.5,
        nav:false,
        dots: true,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,
                dots: false,
            },
            768:{
                items:2,
                dots: false,
            },
            992:{
                items:2,
                dots: false,
            },
            1200:{
                items:3
            }
        }
    })
    


});

navMenu();

