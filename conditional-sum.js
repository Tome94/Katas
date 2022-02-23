
/*cd
const sumTheArray = function(data){
  let total = 0
  for (let i = 0; i < data.length; i++){
    total += data[i];
  }
  console.log (total)
}

const conditionalSum = function (values, conditions){
const evenarray = []
const oddarray = []
  for (let i = 0; i < values.length; i++){
    if (values[i]%2 ===0){
      evenarray.push (values[i])
    }
    else {
      oddarray.push (values[i])
    }

  }
  if (conditions === "even"){
    sumTheArray (evenarray)
    //return evenarray
  }
  else if (conditions === "odd"){
    sumTheArray (oddarray)
    //return (oddarray)
  }
};
conditionalSum ([1, 2, 3, 4, 5], "even");
conditionalSum ([6, 7, 8, 9, 10], "odd");
*/

const conditionalSum = function (values, conditions){
  let total = 0;
  for (let value of values){
    if (conditions === "even" && value % 2 == 0){
      total += value;
    }
    else if (conditions === "odd" && value % 2 != 0){
      total += value;
    }
    //else return 0 
  }
return total
}
console.log (conditionalSum ([1, 2, 3, 4, 5], "even"));
console.log (conditionalSum ([1, 2, 3, 4, 5], "odd"));
console.log (conditionalSum ([], "odd"))