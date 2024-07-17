const messageButton = document.querySelector("#message-button");
const messageBanner = document.querySelector("#message");
const h3 = document.querySelector("#hThree");

messageButton.addEventListener("click", () => {
    messageBanner.style.display = "none";
    messageButton.style.display = "none";
    h3.style.marginTop = "300px";
});