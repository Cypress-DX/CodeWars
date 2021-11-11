function countBits(n) {
  var binary = n.toString(2);
  var output = [];
  let array = binary.toString().split("");//stringify the number, then make each digit an item in an array
  	let arr = array.map(x => parseInt(x));//convert all the items back into numbers
  	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
    }

countBits(44);
