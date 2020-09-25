const buttonProictis = document.querySelector("#button-proictis");
const modal = document.querySelector(".modal");
const welcomeButton = document.querySelector(".welcome-button");

buttonProictis.addEventListener("click", toggleModal);
welcomeButton.addEventListener("click", toggleModal);

function toggleModal() {
	modal.classList.toggle("is-open");
}
