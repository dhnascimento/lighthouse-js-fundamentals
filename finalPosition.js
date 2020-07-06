const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


function finalPosition(array) {
  let currentPosition = [0,0];
  for (let i in array) {
    if (array[i] === "north") {
      currentPosition[1] += 1;
    } else if (array[i] === "south") {
      currentPosition[1] += -1;
    } else if (array[i] === "east") {
      currentPosition[0] += 1;
    } else if (array[i] === "west") {
      currentPosition[0] += -1;
    }
  }
  return currentPosition;
}


console.log(finalPosition(moves));
