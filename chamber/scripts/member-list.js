const membersURL = "https://jgohnert.github.io/wdd230/chamber/data/members.json";

const memberCards = document.querySelector("#cards");

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
        let companySite = document.createElement("p");
        let companyMembership = document.createElement("p");
        let companyLogo = document.createElement("img");
        companyName.textContent = `${member.name}`;
        companyAddress.textContent = `Address: ${member.address}`;
        companyPhone.textContent = `${member.phone}`;
        companySite.textContent = `${member.URL}`;
        companyMembership.textContent = `Membership Level: ${member.membership}`;
        companyLogo.setAttribute("src", member.image);
        companyLogo.setAttribute("alt", `Portrait of ${member.name}`);

        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("width", "350");
        companyLogo.setAttribute("height", "120");

        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companySite);
        card.appendChild(companyMembership);
        card.appendChild(companyLogo);

        memberCards.appendChild(card);
    });
}

getMembers();