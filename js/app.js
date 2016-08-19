for (var number = 1; number <= 100; number++) {
	input = "";
	if (number % 3 == 0)
		input += "Fizz";
	if (number % 5 == 0)
		input += "Buzz";
console.log(input || number);
}

