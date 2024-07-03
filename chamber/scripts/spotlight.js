const membersURL = "https://jgohnert.github.io/wdd230/chamber/data/members.json";

const memberCards = document.querySelector(".spotlight-card");

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}