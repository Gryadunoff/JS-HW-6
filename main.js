/* Задача 1 */

var arr = [{ name: 'Vasya', age: 24 }, { name: 'Petya', age: 12 }, { name: 'Fedya', age: 6 }, { name: 'Ann', age: 18 }, { name: 'Nastya', age: 40 }]
arr.sort(function (a, b) {
  return a.age - b.age;
})

console.log(arr)

/* Задача 2 */

var arrBool = [NaN, 0, 77, false, -17, '', undefined, 99, null];

var filtered = arrBool.filter(Boolean);

console.log(filtered)


/* Задача 3 */

var arrIndex = [5, 455, 45, 'Vasya', 35, 5],
  test = [];
function find(elem, value) {
  for (var i = 0; i < elem.length; i++) {
    var item = arrIndex[i];
    if (item === value) {
      test.push(i)
    }
  }
  console.log(test)
}

find(arrIndex, 5)


/* Задача 4 */

function createMatrix(row, col) {
  var arr = [];
  for (var i = 0; i < row; i++) {
    arr[i] = [];
    for (var j = 0; j < col; j++) {
      arr[i][j] = Math.floor(Math.random() * 100);
    }
  }
  return arr;
}
var myMatrix = createMatrix(10, 10);

console.log(myMatrix)