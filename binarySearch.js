// write a program for binary search algorithm 
//  it only works on the sorted array 
// input [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] and target = 8 or 13

function binarySearch(sortedArr, item){
  let low = 0
  // delcaring the low value
  let high = sortedArr.length
  // delcaring the high value to arr's length
  while(low < high){
    // loop until low is lesser than high
    const mid = Math.floor((low+high)/2)
    // add low and high divided by 2. floor which rounding the value eg: 1.5 or 1.2
    const midValue = sortedArr[mid]
    // delcaring the midvalue to sortedArr's value to mid
    if(midValue === item){
      // midvalue is equal to item
      return mid;
      // show mid value
    }else if(midValue < item){
      // midvalue is lesser than item 
      low = low +1
      // add low with one value
    }else{
      high = high - 1
      // decrease the high with -1
    }
  }
  return -1;
  // item is not found in array then return -1
}
sortedArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let output = binarySearch(sortedArr,20);
console.log(output);