//-----------------------------------------------------------------------------------------
// esta clase permite mostrar el popup con los formularios
//-----------------------------------------------------------------------------------------

import Popup from "./Popup.js";

import {
  popUpMainSubtitle,
  popUpSubtitle,
  popUpErrorMainSubtitle,
  popUpErrorSubtitle,
  popUpButtonSave,
  openedPopup,
  closedPopup,
  buttonDisabled,
  formInputError,
  inputErrorVisible,
} from "../utils/constans.js";

export default class PopupWithForm extends Popup {
  constructor({ containerSelector, formSelector, handleFormSubmit }) {
    super(containerSelector);
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // Obtiene los elementos de todos los campos
    this._inputList = document.querySelectorAll(this._formSelector);

    // Crea un objeto vacío
    this._formValues = {};

    // Agrega los valores de los campos a este objeto
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    // Devuelve el objeto values
    return this._formValues;
  }

  _resetForm() {
    this._inputList = document.querySelectorAll(this._formSelector);
    this._inputList.forEach((input) => {
      input.value = "";
    });

    popUpMainSubtitle.classList.remove(formInputError);
    popUpSubtitle.classList.remove(formInputError);
    popUpErrorMainSubtitle.classList.remove(inputErrorVisible);
    popUpErrorSubtitle.classList.remove(inputErrorVisible);
  }

  closePopUp() {
    super.closePopUp();
    this._resetForm();
  }

  setEventListeners() {
    super.setEventListeners();
    this._container.addEventListener("submit", (evt) => {
      this._handleFormSubmit(evt);
    });

    popUpMainSubtitle.addEventListener("keypress", (evt) => {
      if (evt.key === "Enter") {
        if (!popUpButtonSave.classList.contains(buttonDisabled)) {
          this._handleFormSubmit(evt);
        }
      }
    });

    popUpSubtitle.addEventListener("keypress", (evt) => {
      if (evt.key === "Enter") {
        if (!popUpButtonSave.classList.contains(buttonDisabled)) {
          this._handleFormSubmit(evt);
        }
      }
    });
  }
}
