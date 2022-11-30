// find the max characters 
// maxChar(i loveeeeee nooodles) === 'e'

function maxChar(Str){
  let obj = {}
  let maxChar = "";
  let count = 0;
  // iterating through the string 
  for (let i = 0; i < Str.length; i++){
    // storging it in temp variable
    const temp = Str[i]
// if there is new obj key then count 1 as value  if not add + 1 to value number 
  obj[temp] = obj[temp] + 1 || 1
    // the value of the obj is lesser than the count
    if(obj[temp] > count){
    // char is equal to the temp 
      maxChar = temp;
      // the value of the count is equal to the object Key 
    count = obj[temp]
    }
  }
  return maxChar;
}
Str='i loveeeeee nooodles'
let output = maxChar(Str)
console.log(output);