$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 460) {
      $('.color-bar').addClass('out')
      $('.header').addClass('out')
      $('.nav-collapse').css('top','53px')
    } else {
      $('.color-bar').removeClass('out')
      $('.header').removeClass('out')
      $('.nav-collapse').css('top','59px')
    }
  })
    $(document).click(function(e){
       if($('.collapse').hasClass('in')){
         $('#nav-btn').trigger('click');
         e.stopPropagation();
       }
    })
    $('.nav-collapse').click(function(e){
       e.stopPropagation();
    })
})
