const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  objectConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //inputElement.classList.add("form__input_type_error");
  inputElement.classList.add(objectConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  //errorElement.classList.add("form__input-error_active");
  errorElement.classList.add(objectConfig.errorClass);
};

const hideInputError = (formElement, inputElement, objectConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //inputElement.classList.remove("form__input_type_error");
  inputElement.classList.remove(objectConfig.inputErrorClass);
  //errorElement.classList.remove("form__input-error_active");
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

const hasInvalidInput = (inputList) => {
  /*inputList.forEach((inputElement) => {
    console.log(inputElement.validity.valid);
  });*/

  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  /*console.log(inputList);
  console.log(buttonElement);
  console.log(objectConfig);*/
  if (hasInvalidInput(inputList)) {
    //console.log(buttonElement);
    buttonElement[0].classList.add(inactiveButtonClass);
    //console.log(buttonElement);
  } else {
    //buttonElement.classList.remove("button_inactive");
    buttonElement[0].classList.remove(inactiveButtonClass);
    //console.log(buttonElement);
  }
};

const setEventListeners = (formElement, objectConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(objectConfig.inputSelector)
  );
  const buttonElement = Array.from(
    formElement.querySelectorAll(objectConfig.submitButtonSelector)
  );

  //console.log(buttonElement);
  toggleButtonState(inputList, buttonElement, objectConfig.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    //console.log(inputElement);
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
    //console.log(formElment);
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
