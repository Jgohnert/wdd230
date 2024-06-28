const bannerButton = document.querySelector("#banner-button");
const bannerContainer = document.querySelector("#banner");

bannerButton.addEventListener("click", () => {
    bannerContainer.style.display = "none";
    bannerButton.style.display = "none";
});

function displayBanner() {
    const date = new Date();
    const day = date.getDay();

    const weekDay = day >= 1 && day <= 3;

    return weekDay
}

if (displayBanner()) {
    bannerContainer.style.display = "block";
    bannerButton.style.display = "block";
} 
else {
    bannerContainer.style.display = "none";
    bannerButton.style.display = "none";
}

