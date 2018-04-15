'use strict'

function search(input, target) {
  if(typeof(target) != "undefinded"){
    for(var i = 0; i < input.length; i++ ) {
      if (input[i] == target) {
        return i;
      }
      return -1;
    }
  }     
}


module.exports = search
