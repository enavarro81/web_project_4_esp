export class FormValidator {
  constructor(config, element) {
    this._config = config;
    this._element = element;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(formElement, objectConfig) {
    const inputList = Array.from(
      formElement.querySelectorAll(objectConfig.inputSelector)
    );

    const buttonElement = Array.from(
      formElement.querySelectorAll(objectConfig.submitButtonSelector)
    );

    if (this._hasInvalidInput(inputList)) {
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

  _checkInputValidity(inputElement, objectConfig) {
    const formElement = document.querySelector(objectConfig.formSelector);
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        objectConfig
      );
    } else {
      this._hideInputError(formElement, inputElement, objectConfig);
    }

    this._toggleButtonState(formElement, objectConfig);
  }

  ValidateElement() {
    this._checkInputValidity(this._element, this._config);
  }
}
