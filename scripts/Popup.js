import {
  popUpContainer,
  popUpImage,
  popUpButtonSave,
  elementValidateSubtitle1,
  elementValidateSubtitle2,
  OPENED_POPUP,
  CLOSED_POPUP,
  POPUP_VISIBLE,
  POPUP_NODISPLAY,
  POPUP_IMAGE_NODISPLAY,
  BUTTON_DISABLED,
} from "../utils/constans.js";

export default class Popup {
  constructor(containerSelector) {
    //console.log("POPUP: " + containerSelector);
    this._container = document.querySelector(containerSelector);
    this.setEventListeners();
  }

  openPopUp() {
    //this._container.classList.toggle(OPENED_POPUP);
    this._container.classList.add(OPENED_POPUP);
    this._container.classList.remove(CLOSED_POPUP);
    popUpContainer.classList.add(POPUP_VISIBLE);
    popUpContainer.classList.remove(POPUP_NODISPLAY);
    popUpImage.classList.add(POPUP_IMAGE_NODISPLAY);
  }

  closePopUp() {
    //this._container.classList.toggle(OPENED_POPUP);
    this._container.classList.remove(OPENED_POPUP);
    this._container.classList.add(CLOSED_POPUP);
    popUpButtonSave.classList.add(BUTTON_DISABLED);
  }

  _handleEscClose() {
    this.closePopUp();
  }

  setEventListeners() {
    this._container.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__button-close")) {
        this.closePopUp();
      }
    });

    document.addEventListener("click", (evt) => {
      const elementClicked = evt.target.className;
      if (
        elementClicked === "popup__container" ||
        elementClicked === "popup popup_theme_opened" ||
        elementClicked === "popup__image"
      ) {
        this.closePopUp();
      }
    });

    document.addEventListener("keydown", (evt) => {
      if (
        evt.key === "Escape" &&
        this._container.classList.contains(OPENED_POPUP)
      ) {
        this._handleEscClose();
      }
    });

    this._container.addEventListener("keypress", (evt) => {
      if (evt.key == "Enter") {
        evt.preventDefault();
      }
    });

    this._container.addEventListener("input", (evt) => {
      if (evt.target.id == "input-1") {
        elementValidateSubtitle1.validateElement();
      } else {
        elementValidateSubtitle2.validateElement();
      }
    });
  }
}
