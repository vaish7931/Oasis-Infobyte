document.addEventListener("DOMContentLoaded", function () {
	const inputTemp = document.getElementById("inputTemp");
	const fromUnit = document.getElementById("fromUnit");
	const toUnit = document.getElementById("toUnit");
	const convertBtn = document.getElementById("convertBtn");
	const outputTemp = document.getElementById("outputTemp");

	convertBtn.addEventListener("click", convertTemperature);

	function convertTemperature() {
		const temp = parseFloat(inputTemp.value);
		const from = fromUnit.value;
		const to = toUnit.value;
		let result;

		if (isNaN(temp)) {
			alert("Please enter a valid number for temperature.");
			return;
		}

		if (from === "celsius" && to === "fahrenheit") {
			result = (temp * 9) / 5 + 32;
		} else if (from === "fahrenheit" && to === "celsius") {
			result = ((temp - 32) * 5) / 9;
		} else if (from === "celsius" && to === "kelvin") {
			result = temp + 273.15;
		} else if (from === "kelvin" && to === "celsius") {
			result = temp - 273.15;
		} else if (from === "fahrenheit" && to === "kelvin") {
			result = ((temp - 32) * 5) / 9 + 273.15;
		} else if (from === "kelvin" && to === "fahrenheit") {
			result = ((temp - 273.15) * 9) / 5 + 32;
		} else {
			result = temp; // If units are the same, return the input temperature
		}

		outputTemp.textContent = result.toFixed(2) + " " + to;
	}
});
