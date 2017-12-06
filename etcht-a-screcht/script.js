var counter = 0
$(document).ready(function(){
  for (var i = 1; i < 257; i++){
      $("section").append('<div></div>');
  };
  if(counter == 0){
    $('div').click(function(){
      $('div').hover(function(){
        $(this).css('background', 'red')
      });
    });
}
  x = $( window ).height();

  $('p').css('top',100)

  $('.btn').click(function(){
    $("div").css('background', 'blue')
      counter = 1
  });
});
