// fizz buzz problem 
function fizzBuzz(n) {
for (let i = 1; i <= n; i++){
// check if the number is multiple of 3 and five 
  if(i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz")
  }
// check if the number  is multiple of five
  else if (i % 5 === 0){
    console.log("fizz")
  }
// check if the number  is multiple of three
  else if (i % 3 === 0){
    console.log("buzz")
  }
  // otherwise print the number
  else{
    console.log(i)
  }
  
}
}
fizzBuzz(5)
