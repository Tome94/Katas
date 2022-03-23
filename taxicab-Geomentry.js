const blocksAway = function(direction) {
  let drivingAngle;
  let currentPos = {east: 0, north:0};
  //reading the directions
  for (let i = 0; i < direction.length; i += 2) {
    console.log("direction " + direction[i]);
    //determine driving angle

    if (drivingAngle === undefined) { //determining the first turn
      if (direction[i] === "right") {
        drivingAngle = 0;
      } else {
        drivingAngle = 90;
      }
    } else if (direction[i] === "right") {
      drivingAngle -= 90;
    } else if (direction[i] === "left") {
      drivingAngle += 90;
    }

    //making the driving angle only 0-360
    if (drivingAngle < 0) {
      drivingAngle += 360;
    } else if (drivingAngle > 356) {
      drivingAngle -= 360;
    }
    console.log(drivingAngle);

    //determining the current location based on driving angles
    if (drivingAngle === 0) {
      currentPos.east += direction[i + 1];
    } else if (drivingAngle === 90) {
      currentPos.north += direction[i + 1];
    } else if (drivingAngle === 180) {
      currentPos.east -= direction[i + 1];
    } else if (drivingAngle === 270) {
      currentPos.north -= direction[i + 1];
    }
  }
  return currentPos;
};
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));