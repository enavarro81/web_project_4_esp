let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");
let profileButtonEdit = document.querySelector(".profile__button-edit");

let popUp = document.querySelector(".popup");
let popUpButtonClose = document.querySelector(".popup__button-close");

let popUpForm = document.querySelector(".popup__form");
let popUpName = document.querySelector(".popup__input_name");
let popUpAboutUs = document.querySelector(".popup__input_about-us");
let popUpButtonSave = document.querySelector(".popup__button-save");

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
