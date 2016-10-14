for (var number = 1; number <= 100; number++) {
	var output = "";
		if (number % 3 === 0)
			output = "Fizz";
		if (number % 5 === 0)
			output = "Buzz";
		if (number % 15 === 0)
			output = "FizzBuzz";
	console.log(output || number);
	var line = output || number;
	console.log(line + "<br>");
	document.write(line + "<br>");
}
