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
    //console.log("click en foto");
    popUp.classList.toggle("popup_theme_opened");
    popUp.classList.remove("popup_theme_closed");
    popUpContainer.setAttribute("style", "display: none;");
    popUpImage.setAttribute("style", "visibility: visible;");
    popUpImage
      .querySelector(".popup__image-frame")
      .setAttribute("src", event.target.style.backgroundImage.split('"')[1]);
    popUpImageCaption.textContent =
      event.target.parentElement.children[2].children[0].textContent;
  }

  _likeElement(event) {
    event.target.classList.toggle("element__like_theme_inactive");
    event.target.classList.toggle("element__like_theme_active");
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
        //console.log("click en like");
        this._likeElement(event);
      });

    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        //console.log("click en trash");
        this._removeElement();
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element
      .querySelector(".element__image")
      .setAttribute("style", "background-image: url(" + this._link + ")");

    return this._element;
  }
}
