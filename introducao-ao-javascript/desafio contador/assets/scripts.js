let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	testaValor();
	CURRENT_NUMBER.innerHTML = count;
	
}

function decrement() {
	count--;
	testaValor();
	CURRENT_NUMBER.innerHTML = count;
}

function testaValor() {
	if (count > 0) {
		CURRENT_NUMBER.style.color = 'blue';
	}
	else if (count < 0) {
		CURRENT_NUMBER.style.color = 'red';
	}
	else {
		CURRENT_NUMBER.style.color = 'gray';
	}
}
