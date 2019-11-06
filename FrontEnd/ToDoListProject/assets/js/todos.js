//Check Off Specific Todos By Clicking
$("ul").on("click", "li",  function(){
  $(this).toggleClass("completed"); 
});

//Click on X to delete ToDo
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text'").keypress(function(e){
  if(e.which === 13){
    //Grabbing new ToDo text from input
    var toDoText = $(this).val();
    $(this).val("");
    //Create new li and added to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
});