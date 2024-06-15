function responsiveDateMessage() {

    const message = document.querySelector(".welcome")
    const todaysDate = new Date(); 
    const visitDate = localStorage.getItem("visitDate");
    const sinceLastVisit = Math.floor((todaysDate - new Date(visitDate)) / 86400000);

    if (!visitDate) {
        message.innerHTML = "Welcome! Let us know if you have any questions."
    }
    else {
        if (sinceLastVisit < 1) {
            message.innerHTML = "Back so soon! Awesome!"
        }
        else {
            const dayOrDays = sinceLastVisit === 1 ? "day" : "days";
            message.innerHTML = (`You last visited ${sinceLastVisit} ${dayOrDays} ago.`);
        }
    }

    localStorage.setItem("visitDate", todaysDate);
}

responsiveDateMessage()