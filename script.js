num1 = prompt("Enter frist Number : ");
num2 = prompt("Enter second Number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var sum, sub, mul, div, rem;

sum = num1 + num2;
console.log(num1 + "+" + num2 + "=" + sum);

sub = num1 - num2;
console.log(num1 + "-" + num2 + "=" + sub);

mul = num1 * num2;
console.log(num1 + "*" + num2 + "=" + mul);

div = num1 / num2;
console.log(num1 + "/" + num2 + "=" + div);

rem = num1 / num2;
console.log(num1 + "%" + num2 + "=" + rem);
