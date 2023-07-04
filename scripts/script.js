import { Card } from "./Card.js";

const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
/*
const popUp = document.querySelector(".popup");
const popUpContainer = document.querySelector(".popup__container");
const popUpImage = document.querySelector(".popup__image");
const popUpImageCaption = document.querySelector(".popup__image-caption");
const popUpButtonClose = document.querySelector(".popup__button-close");
const popUpButtonCloseImg = document.querySelector(
  ".popup__button-close_theme_image"
);
*/
const popUpForm = document.querySelector(".popup__form");
const popUpTittle = document.querySelector(".popup__title");
const popUpInput1 = document.querySelector(".popup__input_1");
const popUpInput2 = document.querySelector(".popup__input_2");
const popUpButtonSave = document.querySelector(".popup__button-save");
const popUpErrorInput1 = document.querySelector(".input-1-error");
const popUpErrorInput2 = document.querySelector(".input-2-error");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach((element) => {
  addElement(element.name, element.link);
});

function addElement(name, link, flag = true) {
  const elements = document.querySelector(".elements");
  /*
  const elementTemplate = document.querySelector("#element-template").content;
  const elementItem = elementTemplate.querySelector(".element").cloneNode(true);

  elementItem.querySelector(".element__title").textContent = name;

  elementItem
    .querySelector(".element__image")
    .setAttribute("style", "background-image: url(" + link + ")");

  elementItem
    .querySelector(".element__image")
    .addEventListener("click", function (event) {
      popUp.classList.toggle("popup_theme_opened");
      popUp.classList.remove("popup_theme_closed");
      popUpContainer.setAttribute("style", "display: none;");
      popUpImage.setAttribute("style", "visibility: visible;");
      popUpImage
        .querySelector(".popup__image-frame")
        .setAttribute("src", event.target.style.backgroundImage.split('"')[1]);
      popUpImageCaption.textContent =
        event.target.parentElement.children[2].children[0].textContent;
    });

  elementItem
    .querySelector(".element__like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("element__like_theme_inactive");
      event.target.classList.toggle("element__like_theme_active");
    });

  elementItem
    .querySelector(".element__trash")
    .addEventListener("click", function (event) {
      elementItem.remove();
    });

  flag === true ? elements.append(elementItem) : elements.prepend(elementItem);*/

  const elementItem = new Card(name, link, "#element-template");
  elementItem.generateCard();
  //console.log(elementItem._element);
  flag === true
    ? elements.append(elementItem._element)
    : elements.prepend(elementItem._element);
}

/*
function setearOpenPopUp() {
  popUp.classList.toggle("popup_theme_opened");
  popUp.classList.remove("popup_theme_closed");
  popUpContainer.setAttribute("style", "visibility: visible;");
  popUpImage.setAttribute("style", "display: none;");
}*/

profileButtonEdit.addEventListener("click", function () {
  setearOpenPopUp();
  popUpTittle.textContent = "Editar perfil";
  popUpInput1.value = "";
  popUpInput1.setAttribute("placeholder", "Nombre");
  popUpInput1.setAttribute("minlength", "2");
  popUpInput1.setAttribute("maxlength", "40");
  popUpInput2.value = "";
  popUpInput2.setAttribute("placeholder", "Acerca de mi");
  popUpInput2.setAttribute("minlength", "2");
  popUpInput2.setAttribute("maxlength", "200");
  popUpInput2.removeAttribute("type");
});

profileButtonAdd.addEventListener("click", function () {
  setearOpenPopUp();
  popUpTittle.textContent = "Nuevo lugar";
  popUpInput1.value = "";
  popUpInput1.setAttribute("placeholder", "Título");
  popUpInput1.setAttribute("minlength", "2");
  popUpInput1.setAttribute("maxlength", "30");
  popUpInput2.value = "";
  popUpInput2.setAttribute("placeholder", "Enlace a la imagen");
  popUpInput2.removeAttribute("minlength");
  popUpInput2.removeAttribute("maxlength");
  popUpInput2.setAttribute("type", "url");
});

/*
function setearClosePopUp() {
  popUp.classList.toggle("popup_theme_opened");
  popUp.classList.add("popup_theme_closed");

  popUpInput1.classList.remove("popup__input_type_error");
  popUpErrorInput1.classList.remove("popup__error_visible");
  popUpInput2.classList.remove("popup__input_type_error");
  popUpErrorInput2.classList.remove("popup__error_visible");
}

popUpButtonClose.addEventListener("click", function () {
  setearClosePopUp();
});

popUpButtonCloseImg.addEventListener("click", function () {
  setearClosePopUp();
});
*/

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  if (popUpTittle.textContent === "Editar perfil") {
    profileName.innerHTML = popUpInput1.value;
    profileSubtitle.innerHTML = popUpInput2.value;
  } else {
    addElement(popUpInput1.value, popUpInput2.value, false);
  }

  popUpInput1.value = "";
  popUpInput2.value = "";
  popUp.classList.toggle("popup_theme_opened");
  popUp.classList.add("popup_theme_closed");
  popUpButtonSave.classList.add("popup__button_disabled");
}

popUpForm.addEventListener("submit", handleProfileFormSubmit);

document.addEventListener("click", function (evt) {
  const elementClicked = evt.target.className;
  if (
    elementClicked === "popup__container" ||
    elementClicked === "popup popup_theme_opened" ||
    elementClicked === "popup__image"
  ) {
    setearClosePopUp();
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" && popUp.classList.contains("popup_theme_opened")) {
    setearClosePopUp();
  }
});
