const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");

const popUp = document.querySelector(".popup");
const popUpButtonClose = document.querySelector(".popup__button-close");

const popUpForm = document.querySelector(".popup__form");
const popUpTittle = document.querySelector(".popup__title");
const popUpInput1 = document.querySelector(".popup__input_1");
const popUpInput2 = document.querySelector(".popup__input_2");
const popUpButtonSave = document.querySelector(".popup__button-save");

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
  const elementTemplate = document.querySelector("#element-template").content;
  const elementItem = elementTemplate.querySelector(".element").cloneNode(true);

  elementItem.querySelector(".element__title").textContent = name;

  elementItem
    .querySelector(".element__image")
    .setAttribute("style", "background-image: url(" + link + ")");

  elementItem
    .querySelector(".element__like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("element__like_theme_active");
    });

  elementItem
    .querySelector(".element__trash")
    .addEventListener("click", function (event) {
      elementItem.remove();
    });

  flag === true ? elements.append(elementItem) : elements.prepend(elementItem);
}

profileButtonEdit.addEventListener("click", function () {
  popUp.classList.add("popup_opened");
  popUpTittle.textContent = "Editar perfil";
  popUpInput1.value = profileName.textContent;
  popUpInput1.setAttribute("placeholder", "Nombre");
  popUpInput2.value = profileSubtitle.textContent;
  popUpInput2.setAttribute("placeholder", "Acerca de mi");
});

profileButtonAdd.addEventListener("click", function () {
  popUp.classList.add("popup_opened");
  popUpTittle.textContent = "Nuevo lugar";
  popUpInput1.value = "";
  popUpInput1.setAttribute("placeholder", "Título");
  popUpInput2.value = "";
  popUpInput2.setAttribute("placeholder", "Enlace a la imagen");
});

popUpButtonClose.addEventListener("click", function () {
  popUp.classList.remove("popup_opened");
});

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
  popUp.classList.remove("popup_opened");
}

popUpForm.addEventListener("submit", handleProfileFormSubmit);
