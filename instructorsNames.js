
const instructorWithTheLongestName = function (instructors){
  let currentMax = instructors[0]["name"].length;
  let indexOfPerson = 0;
  for (const[index, instructor] of instructors.entries() ){
    //console.log (instructor["name"])
    if (instructor["name"].length > currentMax){
      currentMax = instructor["name"];
      indexOfPerson = index;
    }
  }
  console.log (instructors[indexOfPerson]);
}

instructorWithTheLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "web"},
  {name: "Ophilia", course: "web"},
  {name: "Donald", course: "web"},
]);

instructorWithTheLongestName([
  {name: "Mattiew", course: "web"},
  {name: "David", course: "IOS"},
  {name: "domascus", course: "web"},
  {name: "Donald", course: "web"},
]);