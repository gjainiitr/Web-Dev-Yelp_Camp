var todos = ["Buy New Turtle"];
//window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var input = prompt("What would you like to do?");

  while (input !== "quit"){

    if (input === "list") {
      listToDos();
    } else if (input === "new") {
      addToDo();
    } else if (input === "delete") {
      deleteToDo();
    }
    
    input = prompt("What would you like to do?");
  }
  console.log("You quit the App");
//}, 500);
  function listToDos(){
    console.log("*********");
    todos.forEach(function(todo, i){
      console.log(i + ": " + todo);
    });
    console.log("*********");
  }

  function addToDo(){
    var newToDo = prompt("Enter new ToDo");
    todos.push(newToDo);  
  }

  function deleteToDo(){
    var index = prompt("Enter index of ToDo to Delete");
    todos.splice(index, 1);
  }