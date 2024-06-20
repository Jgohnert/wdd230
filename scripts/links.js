const baseURL = "https://jgohnert.github.io/wdd230/";
const linksURL = "https://jgohnert.github.io/wdd230/data/links.json";

const linksContainer = document.querySelector("#links");

async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        const weeks = data.lessons

        displayLinks(weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((lesson) => {
        let linksList = document.createElement("ul");
        lesson.links.forEach((link) => {
            let lessonList = document.createElement("li");
            let linkList = document.createElement("a");

            linkList.textContent = `Lesson ${lesson.lesson} - ${link.title}`;
            linkList.href = `${baseURL}${link.url}`;
            linkList.target = "_blank";

            lessonList.appendChild(linkList);
            linksList.appendChild(lessonList);
        });

        linksContainer.appendChild(linksList);
    });
}

getLinks();