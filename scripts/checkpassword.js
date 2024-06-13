const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");

pass2.addEventListener("focusout", checkPassword);

function checkPassword() {
	if (pass.value !== pass2.value) {
		pass2.style.backgroundColor = "#EAA3A3";
        pass2.placeholder = "Passwords must match.";
		pass2.value = "";
        pass.value = "";
        pass.focus();
	} 
    else {
		pass2.placeholder = "";
	}
}

const userRating = document.querySelector("#rating");
const rate = document.querySelector("#rate");

rate.addEventListener("change", displayRatingValue);
rate.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    userRating.innerHTML = rate.value;
}