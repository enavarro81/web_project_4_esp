//-----------------------------------------------------------------------------------------
// esta clase permite crear el popup que contendrá la información del usuario, el fomulario y los lugares
//-----------------------------------------------------------------------------------------

import {
  popUpContainer,
  popUpImage,
  popUpButtonSave,
  popUpMainSubtitle,
  elementValidateMainSubtitle,
  elementValidateSubtitle,
  openedPopup,
  closedPopup,
  popupVisible,
  popupNoDisplay,
  popupImageNoDisplay,
  inputErrorVisible,
  buttonDisabled,
} from "../utils/constans.js";

export default class Popup {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
    this.setEventListeners();
  }

  openPopUp() {
    this._container.classList.add(openedPopup);
    this._container.classList.remove(closedPopup);
    popUpContainer.classList.add(popupVisible);
    popUpContainer.classList.remove(popupNoDisplay);
    popUpImage.classList.add(popupImageNoDisplay);

    this.setPopUpEventListeners();
  }

  closePopUp() {
    this._container.classList.remove(openedPopup);
    this._container.classList.add(closedPopup);
    popUpButtonSave.classList.add(buttonDisabled);

    this.unsetDocumentClickEventListener();
    this.unsetDocumentKeydownEventListener();
  }

  _handleEscClose() {
    this.closePopUp();
  }

  unsetDocumentClickEventListener() {
    document.removeEventListener("click", this.setupClickListener);
  }

  unsetDocumentKeydownEventListener() {
    document.removeEventListener("keydown", this.setupKeydownListener);
  }

  setDocumentClickEventListener(evt) {
    const elementClicked = evt.target.className;
    if (
      elementClicked === "popup__container" ||
      elementClicked === "popup popup_theme_opened" ||
      elementClicked === "popup__image"
    ) {
      this.closePopUp();
    }
  }

  setDocumentKeydownEventListener(evt) {
    if (
      evt.key === "Escape" &&
      this._container.classList.contains(openedPopup)
    ) {
      this._handleEscClose();
    }
  }

  setPopUpEventListeners() {
    if (!this.setupClickListener) {
      this.setupClickListener = (evt) => {
        this.setDocumentClickEventListener(evt);
      };
    }

    document.addEventListener("click", this.setupClickListener);

    if (!this.setupKeydownListener) {
      this.setupKeydownListener = (evt) => {
        this.setDocumentKeydownEventListener(evt);
      };
    }

    document.addEventListener("keydown", this.setupKeydownListener);
  }

  setEventListeners() {
    this._container.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__button-close")) {
        this.closePopUp();
      }
    });

    this._container.addEventListener("keypress", (evt) => {
      if (evt.key == "Enter") {
        evt.preventDefault();
      }
    });

    this._container.addEventListener("input", (evt) => {
      if (evt.target.id == "input-1") {
        elementValidateMainSubtitle.validateElement();
      } else {
        elementValidateSubtitle.validateElement();
      }
    });
  }
}
