const urlEncode = function (text){
let encoded = ""
text = text.trim(' ')

for (const string of text){
  if (string === " "){
    encoded += "%20"
  }
  else {
    encoded += string
  }
}
return encoded
};

console.log (urlEncode ("Lighthouse Labs"));
console.log (urlEncode (" Lighthouse Labs "));
console.log (urlEncode ("Blue is greener than purple for sure"));
