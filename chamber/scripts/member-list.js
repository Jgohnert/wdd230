const membersURL = "https://jgohnert.github.io/wdd230/chamber/data/members.json";

const memberCards = document.querySelector(".cards");

async function getMembers() {
        const response = await fetch(membersURL);
        const data = await response.json();
        console.table(data.members);
        displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("p");
        let companyPhone = document.createElement("p");
        let companySite = document.createElement("a");
        let companyMembership = document.createElement("p");
        let companyLogo = document.createElement("img");
        
        companyName.textContent = member.name;
        companyAddress.textContent = `Address: ${member.address}`;
        companyPhone.textContent = `${member.phone}`;
        companySite.textContent = member.url;
        companySite.href = member.url;
        companyMembership.textContent = `${member.membership} Membership`;

        companyLogo.setAttribute("src", member.image);
        companyLogo.setAttribute("alt", `Portrait of ${member.name}`);
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("width", "350");
        companyLogo.setAttribute("height", "120");

        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(companyMembership);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companySite);

        memberCards.appendChild(card);
    });
}

getMembers();


const gridview = document.querySelector("#grid");
const listview = document.querySelector("#list");
const display = document.querySelector(".cards");

gridview.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listview.addEventListener("click", showListview); 

function showListview() {
	display.classList.add("list");
	display.classList.remove("grid");
}