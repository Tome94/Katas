const organizeInstructors = function(instructors) {
  let output = {};
  for (const instructor of instructors) {

    if (output[instructor.course]) {
      output[instructor.course].push(instructor.name);
    } else {
      output[instructor.course] = [instructor.name];
    }
    console.log(Array.isArray(output[instructor.course]));
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
