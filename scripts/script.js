const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileButtonEdit = document.querySelector(".profile__button-edit");

const popUp = document.querySelector(".popup");
const popUpButtonClose = document.querySelector(".popup__button-close");

const popUpForm = document.querySelector(".popup__form");
const popUpName = document.querySelector(".popup__input_name");
const popUpAboutUs = document.querySelector(".popup__input_about-us");
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

function addElement(name, link) {
  const elements = document.querySelector(".elements");
  const elementTemplate = document.querySelector("#element-template").content;
  const elementItem = elementTemplate.querySelector(".element").cloneNode(true);
  const elementImage = elementItem.querySelector(".element__image");

  elementItem.querySelector(".element__title").textContent = name;

  elementItem
    .querySelector(".element__image")
    .setAttribute("style", "background-image: url(" + link + ")");

  elements.append(elementItem);
}

profileButtonEdit.addEventListener("click", function () {
  popUp.classList.add("popup_opened");
  popUpName.value = profileName.textContent;
  popUpAboutUs.value = profileSubtitle.textContent;
});

popUpButtonClose.addEventListener("click", function () {
  popUp.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.innerHTML = popUpName.value;
  profileSubtitle.innerHTML = popUpAboutUs.value;
  popUpName.value = "";
  popUpAboutUs.value = "";
  popUp.classList.remove("popup_opened");
}

popUpForm.addEventListener("submit", handleProfileFormSubmit);
