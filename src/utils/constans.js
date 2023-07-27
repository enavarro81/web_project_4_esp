//-----------------------------------------------------------------------------------------
// archivo que contiene las variables que se usan en todo el sitio
//-----------------------------------------------------------------------------------------
import { FormValidator } from "../components/FormValidator.js";

//variables perfil
export const profileName = document.querySelector(".profile__name");
export const profileSubtitle = document.querySelector(".profile__subtitle");
export const profileButtonEdit = document.querySelector(
  ".profile__button-edit"
);
export const profileButtonAdd = document.querySelector(".profile__button-add");

//variables de popup
export const popUpForm = document.querySelector(".popup__form");
export const popUpTitle = document.querySelector(".popup__title");
export const popUpMainSubtitle = document.querySelector(".popup__input_1");
export const popUpSubtitle = document.querySelector(".popup__input_2");
export const popUpButtonSave = document.querySelector(".popup__button-save");
export const popUpErrorMainSubtitle = document.querySelector(".input-1-error");
export const popUpErrorSubtitle = document.querySelector(".input-2-error");

export const popUp = document.querySelector(".popup");
export const popUpContainer = document.querySelector(".popup__container");
export const popUpImage = document.querySelector(".popup__image");
export const popUpImageCaption = document.querySelector(
  ".popup__image-caption"
);
export const popUpButtonClose = document.querySelector(".popup__button-close");
export const popUpButtonCloseImg = document.querySelector(
  ".popup__button-close_theme_image"
);

//declaro variables de css
export const openedPopup = "popup_theme_opened";
export const closedPopup = "popup_theme_closed";
export const popupVisible = "popup__container_theme_visible";
export const popupNoDisplay = "popup__container_theme_no-display";
export const popupImageVisible = "popup__image_theme_visible";
export const popupImageNoDisplay = "popup__image_theme_no-display";
export const buttonDisabled = "popup__button_disabled";
export const formInputError = "popup__input_type_error";
export const inputErrorVisible = "popup__error_visible";
export const likeInactive = "element__like_theme_inactive";
export const likeActive = "element__like_theme_active";

//declaro objeto y variables con parámetros de nombre de css para validación de formularios
export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//objeto que contiene los items a mostrar
export const initialCards = [
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

//variables para la validacion de formulario
export const elementValidateMainSubtitle = new FormValidator(
  config,
  popUpMainSubtitle
);
export const elementValidateSubtitle = new FormValidator(config, popUpSubtitle);
