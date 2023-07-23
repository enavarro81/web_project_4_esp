import Popup from "./Popup.js";

import {
  popUpContainer,
  popUpImage,
  popUpImageCaption,
  OPENED_POPUP,
  CLOSED_POPUP,
  POPUP_NODISPLAY,
  POPUP_IMAGE_VISIBLE,
  POPUP_IMAGE_NODISPLAY,
} from "../utils/constans.js";

export default class PopupWithImage extends Popup {
  constructor(data, containerSelector) {
    super(containerSelector);
    this._image = data.image;
    this._title = data.title;
  }

  openPopUp() {
    super.openPopUp();

    popUpContainer.classList.add(POPUP_NODISPLAY);
    popUpImage.classList.add(POPUP_IMAGE_VISIBLE);
    popUpImage.classList.remove(POPUP_IMAGE_NODISPLAY);
    popUpImage
      .querySelector(".popup__image-frame")
      .setAttribute("src", this._image);
    popUpImageCaption.textContent = this._title;
  }
}
