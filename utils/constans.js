//-----------------------------------------------------------------------------------------
// archivo que contiene las variables que se usan en todo el sitio
//-----------------------------------------------------------------------------------------
import { FormValidator } from "../scripts/FormValidator.js";

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
export const popUpSubtitle1 = document.querySelector(".popup__input_1");
export const popUpSubtitle2 = document.querySelector(".popup__input_2");
export const popUpButtonSave = document.querySelector(".popup__button-save");
export const popUpErrorSubtitle1 = document.querySelector(".input-1-error");
export const popUpErrorSubtitle2 = document.querySelector(".input-2-error");

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
export const OPENED_POPUP = "popup_theme_opened";
export const CLOSED_POPUP = "popup_theme_closed";
export const POPUP_VISIBLE = "popup__container_theme_visible";
export const POPUP_NODISPLAY = "popup__container_theme_no-display";
export const POPUP_IMAGE_VISIBLE = "popup__image_theme_visible";
export const POPUP_IMAGE_NODISPLAY = "popup__image_theme_no-display";
export const BUTTON_DISABLED = "popup__button_disabled";
export const FORM_INPUT_ERROR = "popup__input_type_error";
export const INPUT_ERROR_VISIBLE = "popup__error_visible";
export const LIKE_INACTIVE = "element__like_theme_inactive";
export const LIKE_ACTIVE = "element__like_theme_active";

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
export const elementValidateSubtitle1 = new FormValidator(
  config,
  popUpSubtitle1
);
export const elementValidateSubtitle2 = new FormValidator(
  config,
  popUpSubtitle2
);
