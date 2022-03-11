const camelCase = function(input) {
  let inputArr = input.split(' ');
  let output = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    output += inputArr[i].charAt(0).toUpperCase() + inputArr[i].slice(1);
  }
  return output;
};
//console.log (camelCase("this is a string"))
const pascalCase = function(input) {
  let inputArr = input.split(' ');
  let output = "";
  for (let i = 0; i < inputArr.length; i++) {
    output += inputArr[i].charAt(0).toUpperCase() + inputArr[i].slice(1);
  }
  return output;
};
//console.log (pascelCase("this is a string"))

const snakeCase = function (input) {
  return input.replace (/\s/g, '_')
}
//console.log (snakeCase("this is a string"))
const kebabCase = function (input) {
  return input.replace (/\s/g, '-')
}
//console.log (kebabCase("this is a string"))

const titleCase = function(input) {
  let inputArr = input.split(' ');
  let output = "";
  for (let i = 0; i < inputArr.length; i++) {
    output += inputArr[i].charAt(0).toUpperCase() + inputArr[i].slice(1) + " ";
  }
  return output;
};
//console.log (titleCase("this is a string"))

const vowelCase = function (input) {
  let vowelInput = "";
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let letter of input) {
    if (vowels.includes(letter)) {
      vowelInput = input.replace(letter, letter.toUpperCase());
      input = vowelInput
    }
  }
  return vowelInput;
}
//console.log (vowelCase("this is a string"))

const consonantCase = function (input) {
  let vowelInput = "";
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let letter of input) {
    if (!vowels.includes(letter)) {
      vowelInput = input.replace(letter, letter.toUpperCase());
      input = vowelInput
    }
  }
  return vowelInput;
}
//console.log (consonantCase("this is a string"))

const upperCase = function (string) {
  return string.toUpperCase();
}
//console.log (upperCase("this is a string"))

const lowerCase = function (string) {
  return string.toLowerCase();
}
//console.log (lowerCase("this is a string"))


const makeCase = function(text, casingStyle) {
  if (typeof casingStyle !== 'object') casingStyle = [casingStyle];

  //sorting the casingStyle array to match the precedence of each casing style
  if (casingStyle.length > 1) {
    const sortingArr = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
    casingStyle.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));
  }

  for (const style of casingStyle) {

    switch (style) {

    case 'camel':
      text = camelCase(text)
      break;

    case 'pascal':
      text = pascalCase(text)
      break;

    case 'snake':
      text = snakeCase(text)
      break;

    case 'kebab':
      text = kebabCase(text)
      break;

    case 'title':
      text = titleCase(text)
      break;

    case 'vowel':
      text = vowelCase(text)
      break;

    case 'consonant':
      text = consonantCase(text)
      break;

    case 'upper':
      text = upperCase (text);
      break;

    case 'lower':
      text = lowerCase (text)
      break;
    }
  }

  return text;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["vowel", "snake"]));