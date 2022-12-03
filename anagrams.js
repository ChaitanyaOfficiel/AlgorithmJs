// find the anagrams in JavaScript
// input the Madam => true 
// input the love => false 

function anagrams(string,string1){
  string = string.toLowerCase().replace(/[^a-z0-9]/gi,'');
  // the string get lower cased and remove nonalphanumeric characters
  string1 = string1.toLowerCase().replace(/[^a-z0-9]/gi,'');
  // the string get lower cased and remove nonalphanumeric characters
  let letterCounter = {}
// delcare the object
  for (let i = 0; i <string.length;i++){
// iterating the string 
const word = string[i]
// storing the value on word
letterCounter[word] = (letterCounter[word]  || 0)+1
// delcaring the key and values in object. if the object is present increase the count else any new the letter the count as one
}
for (let item of string1 ){
  // iterating the string two
  if(!letterCounter[item]){
    // check if the string two equal to object value 
      return false;
      // if not satistifed return false
  }
  letterCounter[item]-1
  // remove the count from object key
}
return true;
// otherwise return true
}
string = "Heart!"
string1= "Earth"
let output = anagrams(string,string1);
console.log(output)