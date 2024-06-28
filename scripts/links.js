const baseURL = "https://jgohnert.github.io/wdd230/";
const linksURL = "https://jgohnert.github.io/wdd230/data/links.json";

const linksContainer = document.querySelector("#links");

async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        const weeks = data.lessons;

        displayLinks(weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((lesson) => {
        let lessonList = document.createElement("li");
        let lessonTitle = document.createTextNode(`Lesson ${lesson.lesson} - `);

        lessonList.appendChild(lessonTitle);

        lesson.links.forEach((link) => {
            let linkList = document.createElement("a");
            linkList.href = link.url.startsWith("http") ? link.url : baseURL + link.url;
            linkList.textContent = link.title;
            linkList.target = "_blank";

            lessonList.appendChild(linkList);

            if (lesson.links.length > 1 && lesson.links.indexOf(link) < lesson.links.length - 1) {
                let separatorBar = document.createTextNode(" | ");
                lessonList.appendChild(separatorBar);
            }
        });

        linksContainer.appendChild(lessonList);
    });
}

getLinks();