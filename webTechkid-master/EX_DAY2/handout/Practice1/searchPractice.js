'use strict'

function search(input, target) {
  if(typeof(target) != "undefined"){
    for(var i=0;i<input.length;i++){
      if(input[i]==target)  return i;
    }
    return -1;
  }
  return -1;
  // return input.indexOf(target); //pattern
}

module.exports = search
