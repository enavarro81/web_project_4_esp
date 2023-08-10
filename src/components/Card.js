//-----------------------------------------------------------------------------------------
// esta clase permite crear plantillas predefinidas de elementos para los lugares
//-----------------------------------------------------------------------------------------

import Api from "../components/Api.js";

import {
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
  baseUrl,
  authorization,
} from "../utils/constans.js";

import { defaultPop } from "../pages/index.js";

export class Card {
  constructor({ data, handleCardClick, cardSelector }) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._totalLikes = data.likes;
    this._owner = data.owner._id;
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

    const apiClass = new Api({ baseUrl, authorization });

    if (event.target.classList.contains(likeActive) == true) {
      const addLikeCard = apiClass.addLikeCard(
        event.target.parentNode.parentNode.parentNode
          .querySelector(".element__image")
          .getAttribute("data-id")
      );

      addLikeCard
        .then((resp) => {
          event.target.parentNode.querySelector(
            ".element__total-likes"
          ).textContent = resp.likes.length;
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const removeLikeCard = apiClass.removeLikeCard(
        event.target.parentNode.parentNode.parentNode
          .querySelector(".element__image")
          .getAttribute("data-id")
      );

      removeLikeCard
        .then((resp) => {
          event.target.parentNode.querySelector(
            ".element__total-likes"
          ).textContent = resp.likes.length;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  _removeElement() {
    defaultPop.openPopUp(() => {
      const apiClass = new Api({ baseUrl, authorization });
      const deleteCard = apiClass.deleteCard(
        this._element.querySelector(".element__image").getAttribute("data-id")
      );

      deleteCard
        .then(() => {
          this._element.remove();
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          defaultPop.closePopUp();
        });
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

  generateCard(userId) {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector(".element__title").textContent = this._name;

    this._element
      .querySelector(".element__image")
      .setAttribute("src", this._link);

    this._element
      .querySelector(".element__image")
      .setAttribute("alt", this._name);

    this._element.querySelector(".element__total-likes").textContent =
      this._totalLikes.length;

    if (this._totalLikes.some((like) => like["_id"] == userId)) {
      this._element
        .querySelector(".element__like")
        .classList.toggle(likeActive);
      this._element
        .querySelector(".element__like")
        .classList.toggle(likeInactive);
    }

    if (userId !== this._owner) {
      this._element
        .querySelector(".element__trash")
        .classList.add("element__trash_theme_invisible");
    }
    this._element
      .querySelector(".element__image")
      .setAttribute("data-id", this._id);

    return this._element;
  }
}
