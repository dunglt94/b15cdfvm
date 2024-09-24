function toMeters(Feet) {
    let toMeters = document.getElementById("FeetToMeters");
    let result = document.getElementById('result1');
    if (toMeters.value === "") {
        result.innerHTML = "";
        return;
    }
    Feet = toM.value * 0.305;
    result.innerHTML = `${Feet} m`;
}

function toFeet(Meters) {
    let toFeet = document.getElementById("MetersToFeet");
    let result = document.getElementById('result2');
    if (toFeet.value === "") {
        result.innerHTML = "";
        return;
    }
    Meters = toFeet.value * 3.279;
    result.innerHTML = `${Meters} Ft`;
}




