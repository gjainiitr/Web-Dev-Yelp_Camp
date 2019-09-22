var button = document.querySelector("button");
//var isPurple = false;

/*button.addEventListener("click", function(){
  if(isPurple){
    document.body.style.backgound = "white";
  } else {
    document.body.style.backgound = "purple";
  }
  isPurple = !isPurple;
});*/

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});