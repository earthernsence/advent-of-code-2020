"use strict";

let numberarray = ["I have to remmove all of these because the devs get angry if I dont. As an example, you can add 200 of your own numbers", ":)"];

let numarray2 = [];
  
function isabove1800(value) {
  return value < 1000;
}

function filterAbove1000() {
  numarray2 = numberarray.filter(isabove1800);
}

filterAbove1000();

let usednumberspot = 0;
let usednumber = numarray2[usednumberspot];
let timesiterated = 0;
let isdone = false;
let forloopvar1 = 0;
let forloopvar2 = 0;

console.log(numarray2.length)

 function dothetwist() {
  filterAbove1000();
  if (!isdone) {
    for (forloopvar1; forloopvar1 < numarray2.length; forloopvar1++) {
      for (forloopvar2; forloopvar2 < numarray2.length; forloopvar2++) {
        if (numarray2[forloopvar2] + numarray2[usednumberspot] + numarray2[forloopvar1] === 2020) {
          console.log(`${numarray2[forloopvar2]}, ${usednumber}, ${numarray2[forloopvar1]}, the product of these three is ${numarray2[forloopvar2] * numarray2[forloopvar1] * usednumber}, good work!`);
          isdone = true;
        }
        break;
      }
      break;
    }
  }
  console.log(`completed iteration ${timesiterated}, which contains these three numbers: the number chosen after the loops are complete ${usednumber}, iterator J ${numarray2[forloopvar1]}, and iterator I: ${numarray2[forloopvar2]}`)
  usednumberspot++;
  usednumber = numarray2[usednumberspot];
  if (usednumberspot >= 9) {
    usednumberspot = 0;
    forloopvar1++;
  }
  if (forloopvar1 >= 9) {
    forloopvar1 = 0;
    forloopvar2++;
  }
  timesiterated++;
}



setInterval(dothetwist, 1);

