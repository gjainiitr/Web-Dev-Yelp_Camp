//isEven

function isEven(n) {
  return n % 2 === 0;
}

//factorial
function factorial(n) {
  var result = 1;
  for(var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//kebabToSnake
function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}