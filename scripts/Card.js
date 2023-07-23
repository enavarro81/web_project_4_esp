//-----------------------------------------------------------------------------------------
// esta clase permite crear plantillas predefinidas de elementos para los lugares
//-----------------------------------------------------------------------------------------

import {
  OPENED_POPUP,
  CLOSED_POPUP,
  POPUP_NODISPLAY,
  POPUP_IMAGE_VISIBLE,
  POPUP_IMAGE_NODISPLAY,
  LIKE_INACTIVE,
  LIKE_ACTIVE,
} from "../utils/constans.js";

export class Card {
  constructor({ data, handleCardClick, cardSelector }) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _likeElement(event) {
    event.target.classList.toggle(LIKE_INACTIVE);
    event.target.classList.toggle(LIKE_ACTIVE);
  }

  _removeElement() {
    this._element.remove();
  }

  _setEventListener() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", (event) => {
        this._handleCardClick(event);
      });

    this._element
      .querySelector(".element__like")
      .addEventListener("click", (event) => {
        this._likeElement(event);
      });

    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._removeElement();
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element
      .querySelector(".element__image")
      .setAttribute("style", `background-image: url(${this._link})`);

    return this._element;
  }
}
