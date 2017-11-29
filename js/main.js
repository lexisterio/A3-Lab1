(function () {

	var carButtons = document.querySelectorALL('.data-ref');
	const httpRequest = new XMLHttpRequest();

  function getCarData() {
		if (!httpRequest) {
			alert('giving up, your browser sucks!');
			return false;
		}

		httpRequest.onreadystatechange = processRequest; // fire this function when things change
		httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
		httpRequest.send();
	}

	function processRequest() {
		// HANDLE THE STAGES OF OUR AJAX call
		let reqIndicator = document.querySelector('.request-state');
		reqIndicator.textContent = httpRequest.readyState;


		if (httpRequest.readyState == XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) { // request worked, all is good!
				//debugger;
				let data = JSON.parse(httpRequest.responseText);
			} else {
				alert('There was a problem with the request');
			}
		}
	}

	function processResult(data) {
		debugger;
		 const { modelName, price, details, modelDetails } = data;
		let model = document.querySelector('.modelName').textContent = modelName;
		let price = document.querySelector('.priceInfo').innerHTML = pricing;
		let desc = document.querySelector('.modelDetails').textContent = modelDetails;

		// model.textContent = carData[this.id].model;
		// price.innerHTML = "$" + carData[this.id].price;
		// desc.textContent = carData[this.id].description;

		carButtons.forEach(function(car, index) {
			car.classList.add('nonActive');

	});
// the backticks are a new ES6 called a template string (look it up)
		document.querySelector(`#${data.model}`).classList.remove('nonActive');

	}

	carButtons.forEach(function(car, index) {
		car.addEventListener('click', getCarData, false);

	});

})();
