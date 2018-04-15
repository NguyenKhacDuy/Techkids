'use strict'

function generate(testLengthArray){
  var result = new Array;
  if (testLengthArray.length >= 4) {
    for (var i = 0; i < testLengthArray.length; i++) {
      var input = new Array;
      for (var j = 0; j < testLengthArray[i]; j++) {
        input.push(Math.random(-10000,10000));
      }
      sort(input);
      var target;
      target = Math.random (11000, -11000);
      result.push( {
        'input': input,
        'target': target,
        'output': Search(input, target)
      }
      );
    }
    FindLocation(input, target);
  }
  return result;  
}

function FindLocation(input, target) {
  for (var i = 0; i < input.length; i++) {
      if (input[i] != target)
      return "Not Found";
      else if (input[i] == target && i == 0)
      return "First Index";
      else if (input[i] == target && i == input.length - 1)
      return "Last Index";
      else 
      return "MiddleIndex";
  }
}

function Search(input, target) {
  for (var i = 0; i < target.length; i++) {
    if (input[i] == target)
      return i;
      else return -1;
  }
}

function sort(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      var temp;
      if (input[i] > input[j]) {
          temp = input[i];
          input[i] = input[j];
          input[j] = temp;
      }
    }
  }
  return input;
}

module.exports = generate
