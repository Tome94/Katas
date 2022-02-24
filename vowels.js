const numberOfVowels = function (data){
  vowelCount= 0 ;
  for (const letters of data){
    if (letters === 'a' || letters === 'e' ||letters === 'i' ||letters === 'o' ||letters === 'u'){
      vowelCount += 1;
    }
  }
  return vowelCount;
};
console.log (numberOfVowels("orange"));
console.log (numberOfVowels("lighthouse labs"));