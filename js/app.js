for (var number = 1; number <= 100; number++) {
	var input = "";
	if (number % 3 == 0)
		input += "Fizz";
	if (number % 5 == 0)
		input += "Buzz";
var line = input || number; 
console.log(line + "<br>");
document.write(line + "<br>");
}

