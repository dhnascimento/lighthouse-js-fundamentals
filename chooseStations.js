const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(array) {
  let votingStations = [];
  for (let i in array) {
    if (array[i][1] >= 20 && (array[i][2] === "school" || array[i][2] === "community centre")) {
      votingStations.push(array[i][0]);
    }
  }
  return votingStations;
}

console.log(chooseStations(stations)); 
