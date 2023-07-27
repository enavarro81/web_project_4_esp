const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  objectConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objectConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objectConfig.errorClass);
};

const hideInputError = (formElement, inputElement, objectConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectConfig.inputErrorClass);
  errorElement.classList.remove(objectConfig.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, objectConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      objectConfig
    );
  } else {
    hideInputError(formElement, inputElement, objectConfig);
  }
};

// esta corección no tiene sentido por que has es un verbo (tener)
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement[0].classList.add(inactiveButtonClass);
  } else {
    buttonElement[0].classList.remove(inactiveButtonClass);
  }
};

const setEventListeners = (formElement, objectConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(objectConfig.inputSelector)
  );
  const buttonElement = Array.from(
    formElement.querySelectorAll(objectConfig.submitButtonSelector)
  );

  toggleButtonState(inputList, buttonElement, objectConfig.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, objectConfig);
      toggleButtonState(
        inputList,
        buttonElement,
        objectConfig.inactiveButtonClass
      );
    });
  });
};

const enableValidation = (objectConfig) => {
  const formList = Array.from(
    document.querySelectorAll(objectConfig.formSelector)
  );

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, objectConfig);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
