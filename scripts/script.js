import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");

const popUpForm = document.querySelector(".popup__form");
const popUpTitle = document.querySelector(".popup__title");
const popUpSubtitle1 = document.querySelector(".popup__input_1");
const popUpSubtitle2 = document.querySelector(".popup__input_2");
const popUpButtonSave = document.querySelector(".popup__button-save");
const popUpErrorSubtitle1 = document.querySelector(".input-1-error");
const popUpErrorSubtitle2 = document.querySelector(".input-2-error");

//declaro objeto y variables con parámetros de nombre de css para validación de formularios
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const elementValidateSubtitle1 = new FormValidator(config, popUpSubtitle1);
const elementValidateSubtitle2 = new FormValidator(config, popUpSubtitle2);

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
  const elementItem = new Card(name, link, "#element-template");
  const item = elementItem.generateCard();

  flag === true ? elements.append(item) : elements.prepend(item);
}

//se setean los componentes para los requerimientos de formulario EDITAR PERFIL
profileButtonEdit.addEventListener("click", function () {
  openPopUp();
  popUpTitle.textContent = "Editar perfil";
  popUpSubtitle1.value = profileName.innerHTML;
  popUpSubtitle1.setAttribute("placeholder", "Nombre");
  popUpSubtitle1.setAttribute("minlength", "2");
  popUpSubtitle1.setAttribute("maxlength", "40");
  popUpSubtitle2.value = profileSubtitle.innerHTML;
  popUpSubtitle2.setAttribute("placeholder", "Acerca de mi");
  popUpSubtitle2.setAttribute("minlength", "2");
  popUpSubtitle2.setAttribute("maxlength", "200");
  popUpSubtitle2.removeAttribute("type");

  popUpButtonSave.classList.remove(BUTTON_DISABLED);
  borrarAlertaErrores();
});

//se setean los componentes para los requerimientos de formulario NUEVO LUGAR
profileButtonAdd.addEventListener("click", function () {
  openPopUp();
  popUpTitle.textContent = "Nuevo lugar";
  popUpSubtitle1.value = "";
  popUpSubtitle1.setAttribute("placeholder", "Título");
  popUpSubtitle1.setAttribute("minlength", "2");
  popUpSubtitle1.setAttribute("maxlength", "30");
  popUpSubtitle2.value = "";
  popUpSubtitle2.setAttribute("placeholder", "Enlace a la imagen");
  popUpSubtitle2.removeAttribute("minlength");
  popUpSubtitle2.removeAttribute("maxlength");
  popUpSubtitle2.setAttribute("type", "url");

  popUpButtonSave.classList.add(BUTTON_DISABLED);
  borrarAlertaErrores();
});

function borrarAlertaErrores() {
  popUpSubtitle1.classList.remove(FORM_INPUT_ERROR);
  popUpSubtitle2.classList.remove(FORM_INPUT_ERROR);
  popUpErrorSubtitle1.classList.remove(INPUT_ERROR_VISIBLE);
  popUpErrorSubtitle2.classList.remove(INPUT_ERROR_VISIBLE);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  if (popUpTitle.textContent === "Editar perfil") {
    profileName.textContent = popUpSubtitle1.value;
    profileSubtitle.textContent = popUpSubtitle2.value;
  } else {
    addElement(popUpSubtitle1.value, popUpSubtitle2.value, false);
  }

  popUpSubtitle1.value = "";
  popUpSubtitle2.value = "";
  popUp.classList.toggle(OPENED_POPUP);
  popUp.classList.add(CLOSED_POPUP);
  popUpButtonSave.classList.add(BUTTON_DISABLED);
}

popUpForm.addEventListener("submit", handleProfileFormSubmit);

popUpForm.addEventListener("keypress", function (evt) {
  if (evt.key == "Enter") {
    evt.preventDefault();
  }
});

popUpForm.addEventListener("input", function (evt) {
  if (evt.target.id == "input-1") {
    elementValidateSubtitle1.validateElement();
  } else {
    elementValidateSubtitle2.validateElement();
  }
});
