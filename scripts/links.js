const baseURL = "https://jgohnert.github.io/wdd230/";
const linksURL = "https://jgohnert.github.io/wdd230/data/links.json";

async function getLinks() {
    const links = await fetch(linksURL);
    const activityData = await links.json();
    console.log(activityData);
}
  
getLinks();