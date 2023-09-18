// ----------------------functional programming---------------------------------
function mapForEach(arr, func) {
  var newArray = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArray.push(func(element));
  }
  return newArray;
}

var result = mapForEach([1, 2, 3, 4], function (a) {
  return 2 * a;
});

console.log(result);

var result = mapForEach([1, 2, 3, 4], function (a) {
  return a > 2;
});

console.log(result);
