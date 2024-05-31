function windChill() {
    var temp = parseFloat(document.getElementById("temperature").innerText);
    var wind = parseFloat(document.getElementById("windchill").innerText);

    if (temp <= 50 && wind > 3.0) {
        var windChill = calculateWindChill(temp, wind);
        document.getElementById("windchill").innerText = windChill.toFixed(0) + "°F";
    } else {
        document.getElementById("windchill").innerText = "N/A";
    }
}

function calculateWindChill(temp, wind) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
}

windChill();