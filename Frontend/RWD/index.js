$(document).ready(function(){
    $('.rwd-menu-show').click(function (e) {
        e.preventDefault();
        $('.rwd-menu-show').toggleClass('rwd-menu-button-rotate');
        $('.nav-item').toggleClass('nav-item-show');
    });
});