const pricesURL = "https://jgohnert.github.io/wdd230/scoots/data/prices.json";

const tableBody = document.querySelector("#table-body")
const rentalDiv = document.querySelector(".main-grid")

async function getPrices() {
    const response = await fetch(pricesURL);
    const rentalData = await response.json();
    displayMotorInfo(rentalData.rentalType);
}

function displayMotorInfo(rentalType) {

    rentalType.forEach(rental => {
        let table = document.createElement("tr");
        let rentalName = document.createElement("td");
        let maxseating = document.createElement("td");
        let reservationPrice = document.createElement("td");
        let walkInPrice = document.createElement("td");

        rentalName.textContent = rental.name;
        maxseating.textContent = rental.maxPersons;
        reservationPrice.textContent = `Half Day: ${rental.reservation[0].halfDay} Full Day: ${rental.reservation[1].fullDay}`;
        walkInPrice.textContent = `Half Day: ${rental.walkIn[0].halfDay} Full Day: ${rental.walkIn[1].fullDay}`;

        table.appendChild(rentalName);
        table.appendChild(maxseating);
        table.appendChild(reservationPrice);
        table.appendChild(walkInPrice);
        
        tableBody.appendChild(table);


        let rentalImgCard = document.createElement("section");
        let imgName = document.createElement("h2");
        let rentalimg = document.createElement("div");

        imgName.textContent = rental.name;
        rentalimg.innerHTML = `<img src="${rental.image}" alt="${rental.name}" width="250" height="250" loading="lazy">`

        rentalImgCard.appendChild(imgName)
        rentalImgCard.appendChild(rentalimg)

        rentalDiv.appendChild(rentalImgCard)

    });

}

getPrices()