// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  var arr = [];
  var odd = [];
  var even = [];

  for (i = 0; i < number.length; i++) {
    if (number[i] % 2 == 1) {
      odd.push(number[i]);
    } else {
      even.push(number[i]);
    }
  }

  arr.push(odd, even);
  return arr;
}

console.log(result(number));
