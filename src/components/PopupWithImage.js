//-----------------------------------------------------------------------------------------
// esta clase permite mostrar los popups con la imagen y descripción de los lugares
//-----------------------------------------------------------------------------------------

import Popup from "./Popup.js";

import {
  popUpContainer,
  popUpImage,
  popUpImageCaption,
  openedPopup,
  closedPopup,
  popupNoDisplay,
  popupImageVisible,
  popupImageNoDisplay,
} from "../utils/constans.js";

export default class PopupWithImage extends Popup {
  constructor(data, containerSelector) {
    super(containerSelector);
    this._image = data.image;
    this._title = data.title;
  }

  openPopUp() {
    super.openPopUp();

    popUpContainer.classList.add(popupNoDisplay);
    popUpImage.classList.add(popupImageVisible);
    popUpImage.classList.remove(popupImageNoDisplay);
    popUpImage
      .querySelector(".popup__image-frame")
      .setAttribute("src", this._image);
    popUpImage
      .querySelector(".popup__image-frame")
      .setAttribute("alt", this._title);
    popUpImageCaption.textContent = this._title;
  }
}
