const membersURL = "https://jgohnert.github.io/wdd230/chamber/data/members.json";
const memberCards = document.querySelector(".spotlight-card");

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        const spotlightMembers = data.members.filter(member => member.membership === "Silver" || member.membership === "Gold");
        displayRandomMembers(spotlightMembers);
    } catch (error) {
        console.error("Error:", error);
    }
}

function getRandomMembers(members, num) {
    const randomMembers = [];
    while (randomMembers.length < num && members.length > 0) {
        const randomIndex = Math.floor(Math.random() * members.length);
        const randomMember = members.splice(randomIndex, 1)[0];
        randomMembers.push(randomMember);
    }
    return randomMembers;
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyLogo = document.createElement("img");

        companyLogo.setAttribute("src", member.image);
        companyLogo.setAttribute("alt", `Portrait of ${member.name}`);
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("width", "350");
        companyLogo.setAttribute("height", "120");

        card.appendChild(companyLogo);
        memberCards.appendChild(card);
    });
}

function displayRandomMembers(members) {
    const randomMembers = getRandomMembers([...members], 3);
    displayMembers(randomMembers);
}

getMembers();