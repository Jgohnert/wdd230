const userVisits = document.querySelector("#visits");

let numVisits = Number(localStorage.getItem("visitNumber"));

userVisits.textContent = numVisits;

numVisits++;

localStorage.setItem("visitNumber", numVisits);