import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");

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

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

initialCards.forEach((element) => {
  addElement(element.name, element.link);
});

function addElement(name, link, flag = true) {
  const elements = document.querySelector(".elements");

  //llamo a la clase Card.js
  const elementItem = new Card(name, link, "#element-template");
  elementItem.generateCard();

  flag === true
    ? elements.append(elementItem._element)
    : elements.prepend(elementItem._element);
}

profileButtonEdit.addEventListener("click", function () {
  setearOpenPopUp();
  popUpTittle.textContent = "Editar perfil";
  popUpInput1.value = profileName.innerHTML;
  popUpInput1.setAttribute("placeholder", "Nombre");
  popUpInput1.setAttribute("minlength", "2");
  popUpInput1.setAttribute("maxlength", "40");
  popUpInput2.value = profileSubtitle.innerHTML;
  popUpInput2.setAttribute("placeholder", "Acerca de mi");
  popUpInput2.setAttribute("minlength", "2");
  popUpInput2.setAttribute("maxlength", "200");
  popUpInput2.removeAttribute("type");

  popUpButtonSave.classList.remove("popup__button_disabled");
  restear_errores();
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

  popUpButtonSave.classList.add("popup__button_disabled");
  restear_errores();
});

function restear_errores() {
  popUpInput1.classList.remove("popup__input_type_error");
  popUpInput2.classList.remove("popup__input_type_error");
  popUpErrorInput1.classList.remove("popup__error_visible");
  popUpErrorInput2.classList.remove("popup__error_visible");
}

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

popUpInput1.addEventListener("input", function (evt) {
  //llamo a la clase FormValidator.js para validar input1
  const elementValidate = new FormValidator(config, popUpInput1);
  elementValidate.ValidateElement();
});

popUpInput1.addEventListener("keypress", function (evt) {
  if (evt.key == "Enter") {
    evt.preventDefault();
  }
});

popUpInput2.addEventListener("input", function (evt) {
  //llamo a la clase FormValidator.js para validar input2
  const elementValidate = new FormValidator(config, popUpInput2);
  elementValidate.ValidateElement();
});

popUpInput2.addEventListener("keypress", function (evt) {
  if (evt.key == "Enter") {
    evt.preventDefault();
  }
});
