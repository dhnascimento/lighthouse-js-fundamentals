const cars = [ {
  time: 0,
  speed: 0
}]


function carPassing (cars, speed) {
  cars.push({time: Date.now(), speed: speed});
  return cars;
}

console.log(carPassing(cars,38));
