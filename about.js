console.log("hello world");

let compliment = document.querySelector('#rubber-ducky')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function sendCompliment () {

	alert('You Have Great Taste');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


compliment.addEventListener('mouseover', sendCompliment)