console.log("***Connected***")
function printReverse(arr){
  /*var newArr = [];
  var c = 0;
  for (var i = arr.length - 1; i >= 0; i--, c++) {
    newArr[c] = arr[i]
  }
  console.log(newArr);*/

  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr){
  var prev = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] !== prev){
      return false;
    }
    prev = arr[i];
  }
  return true;
}

function sumArray(arr){
  var result = 0;
  arr.forEach(function(e){
    result += e;
  });
  return result;
}

function max(arr){
  var result = 0;
  arr.forEach(function(e){
    if(result<e){
      result = e;
    }
  });
  return result;
}