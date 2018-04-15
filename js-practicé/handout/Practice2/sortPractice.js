'use strict'

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

module.exports = sort
