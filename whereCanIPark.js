const whereCanIPark = function (spots, vechicle){
for (let y = 0; y < spots.length; y++){
  for (let x = 0; x <spots[y].length; x++){
    if (vechicle === "regular" && spots[y][x]==="R"){
    return [x, y];
  }
   if (vechicle === "small" && (spots[y][x]==="S" || spots[y][x]==="R")){
    return [x, y];
  }
   if (vechicle === "motercycle" && (spots[y][x]==="S" || spots[y][x]==="R" || spots[y][x]==="M")){
    return [x, y];
    }
  }
 }
return false
};

console.log (whereCanIPark(
  [
    ['s', 'R', 's', 'S', 'R', 'M'],
    ['s', 'M', 's', 'S', 'r', 'M'],
    ['s', 'M', 's', 'S', 'r', 'M'],
    ['s', 'r', 's', 'm', 'r', 'M'],
    ['S', 'r', 's', 's', 's', 'M'],
    ['S', 'r', 'S', 'M', 'M', 'S'],
  ],
  'regular'
));