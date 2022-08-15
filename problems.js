function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  odds = [];
  for (let i = 1; i < arr.length; i += 2) {
    odds.push(arr[i]);
  }
  return odds;
}

console.log(oddIndices([0, 1, 2, 3, 4, 5]));

// Return an array containing all the odd indices starting from the end
function oddReverse(arr) {
  // start at back of array 
//   while >= index 0
// iterate every 2
  
  odds = [];

  for (let i = arr.length - 1; i > 0; i--) {
    if (i % 2 != 0) {
      odds.push(arr[i]);
    }
  }
  return odds;
}
console.log(oddReverse([0, 1, 2, 3, 4, 5]));

// Return an array containing all indices that are powers of 2

function secondPower(arr) {
  let powerOfTwo = [];
  for (let i = 1; i < arr.length; i *= 2) {
    // if((Math.log2(arr[i]) % 1 === 0) && (arr[i] % 2 === 1)) {
    // if (Math.log2(arr[i]) % 1 === 0) {
      powerOfTwo.push(arr[i]);
    }
    return powerOfTwo;
  };


// console.log(secondPower([0, 1, 2, 3, 4, 5, 8, 64]));

// console.log(Math.log(1000)/Math.log(10));
// console.log(Math.log(100)/Math.log(10));
// console.log(Math.log(10)/Math.log(10));
// console.log(Math.log(8)/Math.log(2));

// console.log(Math.log(17));
// console.log(Math.LN2);

// Return an array containing all indices that are powers of n
// function nthPower(arr, n) {

//     let powerOfN = [];

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         if(Math.log(100)/Math.log(10)) {
//             powerOfN.push(arr[i]);
//     }
//     }
//     return powerOfN;
// };

// console.log(nthPower([0, 1, 2, 8], 2));

// let a = Math.pow(0, 1);
// let b = Math.pow(1, 1);
// let c = Math.pow(1, 10);
// let d = Math.pow(3, 4);
// let e = Math.pow(-3, 3);
// let f = Math.pow(2, 5);

// console.log(a, b, c, d, e, f);

// Return an array containing all indices that are powers of n

function isPower(x, y) {
  // The only power of 1 is 1 itself
  if (x == 1) return y == 1;

  // Repeatedly compute power of x
  let pow = 1;
  while (pow < y) pow = pow * x;
  //     1 7 7
  //    7 7 49
  //    49 7 343
  // Check if power of x becomes y
  return pow == y;
}

//          x is power of y?
//         7 is power of 49?
console.log(isPower(7, 49)); // true
console.log(isPower(2, 16)); // true
console.log(isPower(3, 18)); // false
console.log(isPower(2, 4)); // true
console.log(isPower(3, 18)); // false

function nthPower(arr, n) {
  let powerOfN = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (isPower(arr[i], n)) {
      console.log(n);
      powerOfN.push(arr[i]);
    }
  }
  return powerOfN;
}

console.log(nthPower([1, 2, 3, 4, 8], 32));





// Return an array containing the first half of an array
// Include middle index on odd length arr
function firstHalf(arr) {
    let arrHalf = [];

    if (arr == undefined) {
        return undefined;
    } else {    
        for (let i = 0; i < arr.length / 2; i++) {
        arrHalf.push(arr[i]);
    }

    }
    return arrHalf;
}

console.log(firstHalf([1, 2, 3, 4, 5, 6, 7]));
console.log(firstHalf([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(firstHalf([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(`^^^^^^^^^`);




// Return an array containing the second half of an array
// Exclude middle index on odd length arr
// function secondHalf(arr) {
//     let arrSecondHalf = [];
//     if (arr == undefined) {
//         return undefined;
// //  } else {  for (let i = Math.trunc(arr.length / 2.0); i < arr.length; i++) {
//     } else {  for (let i = arr.length - 1; i >= Math.trunc(arr.length / 2.0); i--) {

//     arrSecondHalf.unshift(arr[i]);
//   }
// }

//   return arrSecondHalf;
// }



function secondHalf(arr) {
    //check for undefined
    if (arr === undefined) {
        return undefined;
    } else {
    // check where to splice array
    const arrHalf = (Math.trunc(arr.length / 2.0) + 1);
    // remove first half of array
    let secondHalf = arr.splice(0, arrHalf);
    }
    return arr
};


console.log(secondHalf([1, 2, 3, 4, 5, 6, 7]));
console.log(secondHalf([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(secondHalf([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(secondHalf());


console.log(`^^^^^^^^^`);

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
