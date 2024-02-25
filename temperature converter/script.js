function convertTemperature() {
    let temperatureInput = document.getElementById("temperature");
    let unitInput = document.getElementById("unit");
    
    let temperature = parseFloat(temperatureInput.value);

    let unit = unitInput.value;

    if (unit === "celsius") {
        // Convert Celsius to Fahrenheit
        var resultFahrenheit = (temperature * 9/5) + 32;
        document.getElementById("result").innerHTML = `${temperature} Celsius is ${resultFahrenheit} Fahrenheit`;
    } else if (unit === "fahrenheit") {
        // Convert Fahrenheit to Celsius
        var resultCelsius = (temperature - 32) * 5/9;
        document.getElementById("result").innerHTML = `${temperature} Fahrenheit is ${resultCelsius} Celsius`;
    }
}

function resetTemp(){
    document.getElementById("temperature").value = "";
    document.getElementById("unit").value = "";
    document.getElementById("result").innerHTML = "";
}