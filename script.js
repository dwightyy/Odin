$(document).ready(function(){
  for (var i = 1; i < 10000; i++){
      $("section").append('<div></div>');
  };
  $('div').hover(function(){
    $(this).css('background', 'red')
  });
});
