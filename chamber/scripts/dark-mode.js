const darkmode = document.querySelector("#dark-mode");
const body = document.querySelector("body");
const eventCards = document.querySelectorAll(".card");
const joinButton = document.querySelector(".join-link")
const infoCard = document.querySelector(".summary")

darkmode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    joinButton.classList.toggle("dark-mode");
    infoCard.classList.toggle("dark-mode");

    eventCards.forEach(card => {
        card.classList.toggle("dark-mode");
    });

    if (body.classList.contains("dark-mode")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        joinButton.style.background = "#fff";
        infoCard.style.background = "#01295f";
        eventCards.forEach(card => {
            card.style.background = "#575757";
        });
    } else {
        body.style.background = "#fff";
        body.style.color = "#000";
        joinButton.style.background = "none";
        infoCard.style.background = "#8eb3c2";
        eventCards.forEach(card => {
            card.style.background = "#b9b9b9";
        });
    }
});