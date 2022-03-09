const calculateChange = function(total, cash) {
  const changeObject = {};
  let change = cash - total;
  while (change > 0) {
    if (change >= 2000) {
      changeObject.twentyDollar = changeObject.twentyDollar + 1 || 1;
      change -= 2000;
    }
    if (change >= 1000) {
      changeObject.tenDollar = changeObject.tenDollar + 1 || 1;
      change -= 1000;
    }
    if (change >= 500) {
      changeObject.fiveDollar = changeObject.fiveDollar + 1 || 1;
      change -= 500;
    }
    if (change >= 200) {
      changeObject.twoDollar = changeObject.twoDollar + 1 || 1;
      change -= 200;
    }
    if (change >= 100) {
      changeObject.oneDollar = changeObject.oneDollar + 1 || 1;
      change -= 100;
    }
    if (change >= 25) {
      changeObject.quatar = changeObject.quatar + 1 || 1;
      change -= 25;
    }
    if (change >= 10) {
      changeObject.dime = changeObject.dime + 1 || 1;
      change -= 10;
    }
    if (change >= 5) {
      changeObject.nickel = changeObject.nickel + 1 || 1;
      change -= 5;
    }
    if (change >= 1) {
      changeObject.penny = changeObject.penny + 1 || 1;
      change -= 1;
    }
  }
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));