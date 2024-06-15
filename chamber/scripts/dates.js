const lastmodif = document.querySelector("#lastmodified");
let lastModified = new Date(document.lastModified);
lastmodif.innerHTML = lastModified.toLocaleString();

var submitTime = Date.now();

document.getElementById("date-time").value = submitTime;
console.log("Membership recorded:", submitTime);

