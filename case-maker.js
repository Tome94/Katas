const camelCase = function(input) {
  let inputArr = input.split(' ');
  let output = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    output += inputArr[i].charAt(0).toUpperCase() + inputArr[i].slice(1);
  }
  return output;
};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));