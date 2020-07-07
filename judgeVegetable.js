const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

function judgeVegetable(vegetables, metric) {
  let highest = 0;
  let winner;
  for (i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highest) {
      winner = vegetables[i].submitter;
      highest = vegetables[i][metric];
    }
  }
  return winner;
}

console.log(judgeVegetable(vegetables, "plumpness"));
