const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

//A function that changes the text in the id element "size-label"
//depending on the screen size.
// const label = document.getElementById("size-label");
// const img = document.getElementById("hero-image");

// function labelSizes() {
//     const widthOfImage = img.clientWidth;

//     if (widthOfImage <= 600) {
//         label.innerText = "Small";
//     }
//     else if (widthOfImage <= 900) {
//         label.innerText = "Medium";
//     }
//     else {
//         label.innerText = "Large";
//     }
// }

// labelSizes();
// window.addEventListener("resize", labelSizes);