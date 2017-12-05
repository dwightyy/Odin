$(document).ready(function(){
  for (var i = 1; i < 10000; i++){
      $("section").append('<div></div>');
  };
  $('div').mousedown(function(){
    $(this).css('background', 'red')
    timeout = setInterval(function(){
      $(this).css('background', 'red')
    }, 500);
    return false
  });
});
