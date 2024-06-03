const modified = document.querySelector("#lastmodified");
let lastModified = new Date(document.lastModified);
modified.innerHTML = lastModified.toLocaleString();