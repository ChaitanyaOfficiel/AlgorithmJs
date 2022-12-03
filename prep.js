function simpleArraySum(ar) {
    // Write your code here
let sum = 0;
  for (let i = 0; i < ar.length; i++){
  sum = ar[i]+sum;
}
  return sum;
}

ar = [1, 2, 3, 4, 10, 11]
let output = simpleArraySum(ar)
console.log(output);