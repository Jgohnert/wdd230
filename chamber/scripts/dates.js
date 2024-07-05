const lastmodif = document.querySelector(".lastmodified");
let lastModified = new Date(document.lastModified);
lastmodif.innerHTML = lastModified.toLocaleString();
