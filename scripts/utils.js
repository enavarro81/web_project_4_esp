/*export const popUp = document.querySelector(".popup");
export const popUpContainer = document.querySelector(".popup__container");
export const popUpImage = document.querySelector(".popup__image");
export const popUpImageCaption = document.querySelector(
  ".popup__image-caption"
);
export const popUpButtonClose = document.querySelector(".popup__button-close");
export const popUpButtonCloseImg = document.querySelector(
  ".popup__button-close_theme_image"
);

//declaro variables de css
export const OPENED_POPUP = "popup_theme_opened";
export const CLOSED_POPUP = "popup_theme_closed";
export const POPUP_VISIBLE = "popup__container_theme_visible";
export const POPUP_NODISPLAY = "popup__container_theme_no-display";
export const POPUP_IMAGE_VISIBLE = "popup__image_theme_visible";
export const POPUP_IMAGE_NODISPLAY = "popup__image_theme_no-display";
export const BUTTON_DISABLED = "popup__button_disabled";
export const FORM_INPUT_ERROR = "popup__input_type_error";
export const INPUT_ERROR_VISIBLE = "popup__error_visible";
export const LIKE_INACTIVE = "element__like_theme_inactive";
export const LIKE_ACTIVE = "element__like_theme_active";
*/

/*
function openPopUp() {
  popUp.classList.toggle(OPENED_POPUP);
  popUp.classList.remove(CLOSED_POPUP);
  popUpContainer.classList.add(POPUP_VISIBLE);
  popUpContainer.classList.remove(POPUP_NODISPLAY);
  popUpImage.classList.add(POPUP_IMAGE_NODISPLAY);
}

function closePopUp() {
  popUp.classList.toggle(OPENED_POPUP);
  popUp.classList.add(CLOSED_POPUP);
}
*/

/*

popUp.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup__button-close")) {
    closePopUp();
  }
});

document.addEventListener("click", function (evt) {
  const elementClicked = evt.target.className;
  if (
    elementClicked === "popup__container" ||
    elementClicked === "popup popup_theme_opened" ||
    elementClicked === "popup__image"
  ) {
    closePopUp();
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" && popUp.classList.contains(OPENED_POPUP)) {
    closePopUp();
  }
});
*/
