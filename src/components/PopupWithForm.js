//-----------------------------------------------------------------------------------------
// esta clase permite mostrar el popup con los formularios
//-----------------------------------------------------------------------------------------

import Popup from "./Popup.js";

import {
  popUpSubtitle1,
  popUpSubtitle2,
  popUpErrorSubtitle1,
  popUpErrorSubtitle2,
  OPENED_POPUP,
  CLOSED_POPUP,
  BUTTON_DISABLED,
  FORM_INPUT_ERROR,
  INPUT_ERROR_VISIBLE,
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
      //console.log(input.name + ":" + input.value);
    });

    // Devuelve el objeto values
    return this._formValues;
  }

  _resetForm() {
    this._inputList = document.querySelectorAll(this._formSelector);
    this._inputList.forEach((input) => {
      input.value = "";
    });

    popUpSubtitle1.classList.remove(FORM_INPUT_ERROR);
    popUpSubtitle2.classList.remove(FORM_INPUT_ERROR);
    popUpErrorSubtitle1.classList.remove(INPUT_ERROR_VISIBLE);
    popUpErrorSubtitle2.classList.remove(INPUT_ERROR_VISIBLE);
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
  }
}
