//-----------------------------------------------------------------------------------------
// esta clase permite validar un componente de un formulario.
// en caso de que todos los componentes sean válidos, se activa el botón de GUARDAR
//-----------------------------------------------------------------------------------------

export class FormValidator {
  constructor(config, element) {
    this._config = config;
    this._element = element;
    this._formElement = document.querySelector(config.formSelector);
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(formElement, objectConfig, ValidateAllInputs) {
    let inputList = Array;

    if (ValidateAllInputs === true) {
      inputList = Array.from(
        formElement.querySelectorAll(objectConfig.inputSelector)
      );
    } else {
      inputList = [formElement.querySelector(objectConfig.inputSelector)];
    }

    const buttonElement = Array.from(
      formElement.querySelectorAll(objectConfig.submitButtonSelector)
    );

    if (this._hasInvalidInput(inputList, ValidateAllInputs)) {
      buttonElement[0].classList.add(objectConfig.inactiveButtonClass);
    } else {
      buttonElement[0].classList.remove(objectConfig.inactiveButtonClass);
    }
  }

  _showInputError(formElement, inputElement, errorMessage, objectConfig) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(objectConfig.inputErrorClass);
    errorElement.classList.add(objectConfig.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement, objectConfig) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(objectConfig.inputErrorClass);
    errorElement.classList.remove(objectConfig.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement, objectConfig, ValidateAllInputs) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        this._formElement,
        inputElement,
        inputElement.validationMessage,
        objectConfig
      );
    } else {
      this._hideInputError(this._formElement, inputElement, objectConfig);
    }

    this._toggleButtonState(this._formElement, objectConfig, ValidateAllInputs);
  }

  validateElement(ValidateAllInputs) {
    this._checkInputValidity(this._element, this._config, ValidateAllInputs);
  }
}
