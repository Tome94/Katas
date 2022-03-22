const urlDecode = function(text) {
  const output = {};
  text = text.replace(/&/g, '=').replace(/%20/g, ' ');
  //console.log(text)
  const arr = text.split('=');
  console.log("text array " + arr);
  for (let i = 0; i < arr.length; i += 2) {
    output[arr[i]] = arr[i + 1];
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
//console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);