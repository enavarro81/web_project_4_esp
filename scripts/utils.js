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
  /*
  popUpInput1.classList.remove("popup__input_type_error");
  popUpErrorInput1.classList.remove("popup__error_visible");
  popUpInput2.classList.remove("popup__input_type_error");
  popUpErrorInput2.classList.remove("popup__error_visible");
*/
}

popUpButtonClose.addEventListener("click", function () {
  setearClosePopUp();
});

popUpButtonCloseImg.addEventListener("click", function () {
  setearClosePopUp();
});
