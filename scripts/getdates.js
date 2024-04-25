const currentyear = document.querySelector("#currentyear")

const year = {
    year: "numeric"
};

currentyear.innerHTML = new Date().toLocaleDateString("en-US", year);

const lastmodif = document.querySelector("#lastmodified");
let lastModified = new Date(document.lastModified);
lastmodif.innerHTML = lastModified.toLocaleString();

