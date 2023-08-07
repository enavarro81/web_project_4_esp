//-----------------------------------------------------------------------------------------
// esta clase permite crear plantillas predefinidas de elementos para los lugares
//-----------------------------------------------------------------------------------------
import PopupWithForm from "../components/PopupWithForm.js";

import {
  openedPopup,
  closedPopup,
  popupNoDisplay,
  popupImageVisible,
  popupImageNoDisplay,
  likeInactive,
  likeActive,
  popUpTitle,
  popUpMainSubtitle,
  popUpErrorMainSubtitle,
  popUpSubtitle,
  popUpErrorSubtitle,
  popUpButtonSave,
  inputNoDisplay,
  buttonDisabled,
} from "../utils/constans.js";

import { defaultPop } from "../pages/index.js";

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
    event.target.classList.toggle(likeInactive);
    event.target.classList.toggle(likeActive);
  }

  _removeElement() {
    defaultPop.openPopUp(() => {
      this._element.remove();
    });

    popUpTitle.textContent = "¿Estás seguro?";

    popUpMainSubtitle.classList.add(inputNoDisplay);
    popUpErrorMainSubtitle.classList.add(inputNoDisplay);
    popUpSubtitle.classList.add(inputNoDisplay);
    popUpErrorSubtitle.classList.add(inputNoDisplay);
    popUpButtonSave.classList.remove(buttonDisabled);
    popUpButtonSave.textContent = "Si";
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
      .setAttribute("src", this._link);

    this._element
      .querySelector(".element__image")
      .setAttribute("alt", this._name);

    return this._element;
  }
}
