const popUp = document.querySelector(".popup");
const popUpContainer = document.querySelector(".popup__container");
const popUpImage = document.querySelector(".popup__image");
const popUpImageCaption = document.querySelector(".popup__image-caption");
const popUpButtonClose = document.querySelector(".popup__button-close");
const popUpButtonCloseImg = document.querySelector(
  ".popup__button-close_theme_image"
);

function setearOpenPopUp() {
  popUp.classList.toggle("popup_theme_opened");
  popUp.classList.remove("popup_theme_closed");
  popUpContainer.setAttribute("style", "visibility: visible;");
  popUpImage.setAttribute("style", "display: none;");
}

function setearClosePopUp() {
  popUp.classList.toggle("popup_theme_opened");
  popUp.classList.add("popup_theme_closed");
}

popUpButtonClose.addEventListener("click", function () {
  setearClosePopUp();
});

popUpButtonCloseImg.addEventListener("click", function () {
  setearClosePopUp();
});

document.addEventListener("click", function (evt) {
  const elementClicked = evt.target.className;
  if (
    elementClicked === "popup__container" ||
    elementClicked === "popup popup_theme_opened" ||
    elementClicked === "popup__image"
  ) {
    setearClosePopUp();
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" && popUp.classList.contains("popup_theme_opened")) {
    setearClosePopUp();
  }
});
