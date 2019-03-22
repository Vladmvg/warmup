module.exports = function warmup(temperature) {
  if (temperature == 0) {
		return "32";
	} else if (temperature <= 0) {
		fahrenheit = 32 - 1.8 * Math.abs(temperature);
		return fahrenheit;
	} else {
		fahrenheit = 1.8 * temperature + 32;
		return fahrenheit;
	}
};
	var temperature;
	var fahrenheit;
