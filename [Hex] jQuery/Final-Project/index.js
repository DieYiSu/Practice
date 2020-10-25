$(document).ready(function () {
    $('.bottom_menu_choose_li').click(e => {
        e.preventDefault();
        if(e.target.classList[1] == 'dropdown'){
            $(e.currentTarget).find('.dropdown_open').slideToggle();
        }
    })

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        themeColor: '#FFFFFF'
    })

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true, 
        'positionFromTop' : 300
    })

    $('.arrow_up').click(e => {
        e.preventDefault();
        $('html, body').animate({
            scrollTop : 0
        },700)
    })
})