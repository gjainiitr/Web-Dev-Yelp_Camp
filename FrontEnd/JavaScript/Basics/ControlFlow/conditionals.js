var age = prompt("How old are you?");

if(age < 0) {
  alert("ERROR: You haven't been born yet ");
  console.log("ERROR: You haven't been born yet");
}

if(age == 21) {
  alert("Happy 21st BirthDay");
  console.log("Happy 21st BirthDay!");
}

if(age % 2 == 0) {
  alert("Your age is odd!");
  console.log("Your age is odd!");
}

if(age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square")
}