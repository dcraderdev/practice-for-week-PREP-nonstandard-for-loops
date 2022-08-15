// console.log('---');
// function oddIndices(arr) {
//   // Return an array containing all the odd indices in the array
//   odds = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     odds.push(i);
//   }
//   return odds;
// }

// console.log(oddIndices([0, 1, 2, 3, 4, 5]));

// function oddReverse(arr) {
//   // Return an array containing all the odd indices starting from the end
//   odds = [];
//   for (let i = arr.length - 1; i >= 0; i -= 2) {
//     odds.push(i);
//   }
//   return odds; 1`    aaa88

// console.log(oddReverse([0, 1, 2, 3, 4, 5]));

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2

function secondPower(x) {
    let secondPowerArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(Math.log2(i) % 1 === 0) {
            secondPowerArr.push(x[i]);
    }
    }
    return secondPowerArr
}
};




console.log(secondPower([0, 1, 2, 3, 4, 5]));

// function powerOfTwo(x) {
//     console.log(Math.log2(x) % 1 === 0);
// }


function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
}
// console.log(nthPower([0, 1, 2, 3, 4, 5]));

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
