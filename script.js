// num1 = prompt("Enter frist Number : ");
// num2 = prompt("Enter second Number: ");

// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);

// var sum, sub, mul, div, rem;

// sum = num1 + num2;
// console.log(num1 + "+" + num2 + "=" + sum);

// sub = num1 - num2;
// console.log(num1 + "-" + num2 + "=" + sub);

// mul = num1 * num2;
// console.log(num1 + "*" + num2 + "=" + mul);

// div = num1 / num2;
// console.log(num1 + "/" + num2 + "=" + div);

// rem = num1 / num2;
// console.log(num1 + "%" + num2 + "=" + rem);

// var num1 = Number(prompt("Enter Your First Number"));
// var num2 = Number(prompt("Enter Your Second Number"));
// var num3 = Number(prompt("Enter Your Third Number"));

// var result =
//   num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3;

// console.log(result);

//using IIFEs function

//using one dimentional arry

// function highestScore(scores) {
//   let max = scores[0];
//   for (let x = 1; x < scores.length; x++) {
//     if (max < scores[x]) {
//       max = scores[x];
//     }
//   }
//   return max;
// }

// let scores = [21, 28, 2, 88, 15];
// let maxScore = highestScore(scores);
// console.log(maxScore);

//using 2d array

function highestRunScorer(playersInfo) {
  let highestScorer = playersInfo[0][0];
  let highestScore = playersInfo[0][1];

  for (let x = 1; x < playersInfo.length; x++) {
    if (highestScore < playersInfo[x][1]) {
      highestScore = playersInfo[x][1];
      highestRunScorer = playersInfo[x][0];
    }
  }
  return highestScorer;
}

let playersInfo = [
  ["Ashraful", 98],
  ["Musfique", 15],
  ["Sakib", 75],
  ["Miraz", 67],
  ["Tasakin", 3],
];

let name = highestRunScorer(playersInfo);
console.log(name);
