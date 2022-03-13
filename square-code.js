const squareCode = function(message) {
  // Put your solution here
 message = message.replace(/\s/g,'');
 let messageSquare = Math.ceil(Math.sqrt(message.length))
 let line = "";
 let lineArr = [];
 let output = ""
 //console.log (messageSquare)
 for (let i = 0; i < message.length; i++){
   if (line.length === messageSquare){
    lineArr.push (line)
    line = ""
    //console.log (lineArr)
   }
   line += message[i]
   //console.log (line)
 }
lineArr.push (line)
console.log (lineArr)
for (let x = 0; x < lineArr[0].length; x++){
  for (let y =0; y < lineArr.length; y++){
    //console.log ("y " +lineArr[y].length)
    //console.log ("x "+ x)
    if (lineArr[y].length>x){
      //removes the undefine if its not a perfect square.
      output += lineArr[y][x]
    }
  }
  output += " ";
}
return output
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));