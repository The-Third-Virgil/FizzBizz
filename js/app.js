var myPrompt = parseInt(prompt("What number would you like?"));
while(isNaN(myPrompt)) {
  alert("Please enter a whole number");
  myPrompt = parseInt(prompt("What number would you like?"));
}
var fizzBuzz = function(userNumber){
    for (var number = 1; number <= userNumber; number++) {
        var output = "";
        if (number % 3 === 0) {
        	output = "Fizz";
        }
        if (number % 5 === 0) {
            output = "Buzz";
        }
        if (number % 15 === 0) {
        	output = "FizzBuzz";
        }   
        console.log(output || number);
        var line = output || number;
        console.log(line + "<br>");
        document.write(line + "<br>");
    }
};

// $(document).ready(function() {
//   console.log(FizzBuzz());
// });
fizzBuzz(myPrompt);