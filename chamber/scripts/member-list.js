const baseURL = "https://jgohnert.github.io/wdd230/";
const membersURL = "https://jgohnert.github.io/wdd230/data/members.json";

const memberCards = document.querySelector("#cards");

async function getMembers() {
        const response = await fetch(membersURL);
        const data = await response.json();
        console.table(data.members);
        // displayMembers(data.members);
}

// const displayMembers = (prophets) => {
//     prophets.forEach((prophet) => {
//         let card = document.createElement("section");
//         let fullName = document.createElement("h2");
//         let birth = document.createElement("p");
//         let portrait = document.createElement("img");
//         fullName.textContent = `${prophet.name} ${prophet.lastname}`;
//         birth.textContent = `Date of Birth: ${prophet.birthdate}`;
//         portrait.setAttribute("src", prophet.imageurl);
//         portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);

//         portrait.setAttribute("loading", "lazy");
//         portrait.setAttribute("width", "340");
//         portrait.setAttribute("height", "440");

//         card.appendChild(fullName);
//         card.appendChild(birth);
//         card.appendChild(portrait);

//         cards.appendChild(card);
//     });
// }