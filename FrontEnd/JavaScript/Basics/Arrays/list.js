var todos = [];
//window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var input = prompt("What would you like to do?");

  while (input !== "quit"){

    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      var newToDo = prompt("Enter new ToDo");
      todos.push(newToDo);
    }
    
    input = prompt("What would you like to do?");
  }
  console.log("You quit the App");
//}, 500);