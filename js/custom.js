$(function() {
    'use strict'
    // trigger nicescroll plugin
    //////////////////////////////////////
    $("html").niceScroll();
    //change header height
    //////////////////////////////////////
    $('.header').height($(window).height());
    //Scroll to Features
    //////////////////////////////////////
    $('.header .arrow i').click(function(){
      $('html,body').animate({
        scrollTop: $('.features').offset().top
      },1000)
    })
    //Show Hidden Items From Work
    /////////////////////////////////////
    $('.show-more').click(function(){
      $('.work .hidden').fadeIn();
    })
});
