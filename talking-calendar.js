const talkingCalendar = function(date) {
  let outputMonth = "";
  const dateArr = date.split("/");
  switch (dateArr[1]) {
  case "01":
    outputMonth += "January ";
    break;
  case "02":
    outputMonth += "Feburary ";
    break;
  case "03":
    outputMonth += "March ";
    break;
  case "04":
    outputMonth += "Apirl ";
    break;
  case "05":
    outputMonth += "May ";
    break;
  case "06":
    outputMonth += "June ";
    break;
  case "07":
    outputMonth += "July ";
    break;
  case "08":
    outputMonth += "August ";
    break;
  case "09":
    outputMonth += "September ";
    break;
  case "10":
    outputMonth += "October ";
    break;
  case "11":
    outputMonth += "November ";
    break;
  case "12":
    outputMonth += "December ";
    break;
  default:
    return "unrecognized date";
  }
  if (dateArr[2][0] === "0") {
    outputMonth += dateArr[2][1];
  } else {
    outputMonth += dateArr[2];
  }
  switch (dateArr[2][0]) {
  case "0":
  case "2":
  case "3":
    switch (dateArr[2][1]) {
    case "1":
      outputMonth += "st, ";
      break;
    case "2":
      outputMonth += "nd, ";
      break;
    case "3":
      outputMonth += "rd, ";
      break;
    default :
      outputMonth += "th, ";
      break;
    }
    break;
  default:
    outputMonth += "th, ";
    break;
  }
  outputMonth += dateArr[0];
  return outputMonth;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/08/22"));