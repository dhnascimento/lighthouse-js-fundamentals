function lastIndexOf (array, value) {
  let array_index = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      array_index.push(i);
    }
  }
  if (array_index.length < 1) {
    return -1;
  } else {
    return (array_index[array_index.length - 1]);
  }
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([], 3));


