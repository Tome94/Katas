const sumTheLargestNumbers = function (data){
let largestNum = 0
let indexOfLargest = 0
let secondLargest = 0
for (let i =0; i < data.length; i++){
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