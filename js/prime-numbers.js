
$(document).ready(function () {
	
	setEventHandlers();

});


function setEventHandlers() {

	$(document).on("click", ".prime-number-submit-container input[type='button']", function() {primeNumberSubmitButtonClick(this)});
	$(document).on('keydown', function(e) { enterKeyPress(e); });
		 
}

function enterKeyPress() {

	primeNumberSubmitButtonClick($(".prime-number-submit-container input[type='button']"));

}

function primeNumberSubmitButtonClick(obj) {		 

	//clear previous output
	$('.output-container').empty();

	///get input value
	var primeNumberLimit = $(obj).prev('input[type="number"]').val();
	
	//get prime numbers
	var primeNumbers = getPrimeNumbers(primeNumberLimit);

	//output
	outputPrimeNumbersToObject(primeNumbers, $('.output-container'));
}


function isPrimeNumber(number) {
	
	//a whole number greater than 1 that cannot be exactly divided 
	//by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
	
	//greater than 1
	if (number < 2) {
	  return false;
	}
  
	//cannot be exactly divided by any whole number
	for (let i = 2; i <= Math.sqrt(number); i++) {
	  if (number % i === 0) {
		return false;
	  }
	}
  
	return true;

}

function getPrimeNumbers(limit) {		 

	var primeNumbers = [];

	//iterate through numbers to limit & add to array
	for (let i = 2; i <= limit; i++) {
		if (isPrimeNumber(i)) {
			primeNumbers.push(i);
		}
	  }

	//output
	return primeNumbers;

}

function outputPrimeNumbersToObject(primeNumbers, $object) {		 

	var span = "<span class='primeNumber textColour'>{primenumber}, </span>";

	//iterate through prime numbers & add to output
	for (let i = 0; i < primeNumbers.length; i++) {
		$object.append(span.replace('{primenumber}', primeNumbers[i]));
	}

	//trim last trailing comma
	var $lastSpan = $object.find('span').last();
	if ($lastSpan) {
		$lastSpan.text($lastSpan.text().replace(", ", ""));
	}

	colourText();

}

