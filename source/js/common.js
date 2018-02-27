$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 60) {
      $('.color-bar').addClass('out')
      $('.header').addClass('out')
    } else {
      $('.color-bar').removeClass('out')
      $('.header').removeClass('out')
    }
  })
})
