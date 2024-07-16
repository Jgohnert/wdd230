const pricesURL = "https://jgohnert.github.io/wdd230/scoots/data/prices.json";

const table = document.querySelector("#table")
const rentalName = document.querySelector("#motor-name");
const maxseating = document.querySelector("#seats");
const reservationPrice = document.querySelector("#res");
const walkInPrice = document.querySelector("#non-res");

async function getPrices() {
    const response = await fetch(pricesURL);
    const rentalData = await response.json();
    console.table(rentalData.rentalType)
    displayMotorInfo(rentalData.rentalType);
}

function displayMotorInfo(rentalType) {

    rentalType.forEach(rental => {
        rentalName.textContent = rental.name;
        maxseating.textContent = rental.maxPersons;
        reservationPrice.textContent = `Half Day: ${rental.reservation[0].halfDay} Full Day: ${rental.reservation[1].fullDay}`;

    });

}

getPrices()