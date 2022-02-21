/*
const sumTheLargestNumbers = function (data){
let largestNum = 0
let indexOfLargest = 0
let secondLargest = 0
for (let i =0; i < data.length; i++){
  //data.forEach (function(value,index){//})
  //data.forEach ((value, index)=>{if statment})
  if (data[i]>largestNum) {
    largestNum = data[i];
    indexOfLargest = i
    }
  }
data.splice (indexOfLargest, 1)
for (let i =0; i < data.length; i++){
  if (data[i]>secondLargest) {
    secondLargest = data[i];
    }
  }
//console.log (largestNum)
//console.log (indexOfLargest)
return largestNum+secondLargest

}
console.log (sumTheLargestNumbers([1,10]));
console.log (sumTheLargestNumbers([1,2,3]));
console.log (sumTheLargestNumbers ([10, 4, 34, 6, 92, 2]));
*/
const sumTheLargestNumbers = function (data){
  let largestNum = 0
  let indexOfLargest = 0
  let secondLargest = 0
  for (const [index, value] of data.entries()){
    if (value>largestNum) {
      largestNum = value;
      indexOfLargest = index
      }
    }
  data.splice (indexOfLargest, 1)
  for (const value of data){
    if (value>secondLargest) {
      secondLargest = value;
      }
    }
  //console.log (largestNum)
  //console.log (indexOfLargest)
  return largestNum+secondLargest
  
  }
  console.log (sumTheLargestNumbers([1,10]));
  console.log (sumTheLargestNumbers([1,2,3]));
  console.log (sumTheLargestNumbers ([10, 4, 34, 6, 92, 2]));