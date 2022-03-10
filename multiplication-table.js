const multiplicationTable = function (maxValue){
  let result = '\n'
  for (let x = 1; x <= maxValue; x++){
    for (let y= 1; y <= maxValue; y++){
      result += (x * y)+ " ";
    }
    result += '\n'
  }
 return result
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));