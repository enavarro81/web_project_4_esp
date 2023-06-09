//-----------------------------------------------------------------------------------------
// esta clase permite crear plantillas predefinidas de elementos para los lugares
//-----------------------------------------------------------------------------------------

export class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _showElement(event) {
    popUp.classList.toggle(OPENED_POPUP);
    popUp.classList.remove(CLOSED_POPUP);
    popUpContainer.classList.add(POPUP_NODISPLAY);
    popUpImage.classList.add(POPUP_IMAGE_VISIBLE);
    popUpImage.classList.remove(POPUP_IMAGE_NODISPLAY);
    popUpImage
      .querySelector(".popup__image-frame")
      .setAttribute("src", event.target.style.backgroundImage.split('"')[1]);
    popUpImageCaption.textContent =
      event.target.parentElement.children[2].children[0].textContent;
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
        this._showElement(event);
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
