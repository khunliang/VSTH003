function convert() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = celsius * 9/5 + 32;
    document.getElementById("result").innerHTML = `${celsius}°C is equal to ${fahrenheit}°F`;
  }