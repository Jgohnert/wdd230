const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const h2Container = document.querySelector('h2');

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        h2Container.style.marginTop = "350px"; 
    } else {
        h2Container.style.marginTop = "90px";
    }
});

const darkmode = document.querySelector("#dark-mode");
const main = document.querySelector("main");
const eventCards = document.querySelectorAll(".card");
const joinButton = document.querySelector(".join-link")

darkmode.addEventListener("click", () => {
    main.classList.toggle("dark-mode");
    joinButton.classList.toggle("dark-mode")

    eventCards.forEach(card => {
        card.classList.toggle("dark-mode");
    });

    if (main.classList.contains("dark-mode")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        joinButton.style.background = "#fff";
        eventCards.forEach(card => {
            card.style.background = "#575757";
        });
    } else {
        main.style.background = "#fff";
        main.style.color = "#000";
        joinButton.style.background = "none";
        eventCards.forEach(card => {
            card.style.background = "#b9b9b9";
        });
    }
});