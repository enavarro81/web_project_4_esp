import { Card } from "./Card.js";
import { Section } from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

import {
  profileName,
  profileSubtitle,
  profileButtonEdit,
  profileButtonAdd,
  popUpTitle,
  popUpSubtitle1,
  popUpSubtitle2,
  popUpButtonSave,
  initialCards,
  BUTTON_DISABLED,
} from "../utils/constans.js";

//inicializo el nombre a mostrar en la pagina
const defaultUserName = new UserInfo(
  profileName.textContent,
  profileSubtitle.textContent
);
let dataUserInfo = defaultUserName.getUserInfo();

const defaultPop = new PopupWithForm({
  containerSelector: ".popup",
  formSelector: ".popup__input",
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    if (popUpTitle.textContent === "Editar perfil") {
      const data = defaultPop._getInputValues();

      // prettier-ignore
      profileName.textContent = data["input-1"];
      profileSubtitle.textContent = data["input-2"];

      defaultUserName.setUserInfo(data["input-1"], data["input-2"]);
      // prettier-ignore
    } else {
      const data = {
        link: popUpSubtitle2.value,
        name: popUpSubtitle1.value,
      };

      const elementItem = new Card({
        data,
        handleCardClick: () => {
          const data = {
            image: event.target.style.backgroundImage.split('"')[1],
            title:
              event.target.parentElement.children[2].children[0].textContent,
          };
          const defaultPopWithImage = new PopupWithImage(data, ".popup");
          defaultPopWithImage.openPopUp();
        },
        cardSelector: "#element-template",
      });
      const item = elementItem.generateCard();

      defaultCard.setAppendFalse();
      defaultCard.addItem(item);
    }

    defaultPop.closePopUp();
  },
});

const defaultCard = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const elementItem = new Card({
        data: item,
        handleCardClick: () => {
          const data = {
            image: event.target.style.backgroundImage.split('"')[1],
            title:
              event.target.parentElement.children[2].children[0].textContent,
          };
          const defaultPopWithImage = new PopupWithImage(data, ".popup");
          defaultPopWithImage.openPopUp();
        },
        cardSelector: "#element-template",
      });
      const element = elementItem.generateCard();

      defaultCard.addItem(element);
    },
  },
  ".elements"
);

defaultCard.renderItems();

//se setean los componentes para los requerimientos de formulario EDITAR PERFIL
profileButtonEdit.addEventListener("click", function () {
  defaultPop.openPopUp();
  dataUserInfo = defaultUserName.getUserInfo();

  popUpTitle.textContent = "Editar perfil";

  popUpSubtitle1.value = dataUserInfo.name;
  popUpSubtitle1.setAttribute("placeholder", "Nombre");
  popUpSubtitle1.setAttribute("minlength", "2");
  popUpSubtitle1.setAttribute("maxlength", "40");

  popUpSubtitle2.value = dataUserInfo.job;
  popUpSubtitle2.setAttribute("placeholder", "Acerca de mi");
  popUpSubtitle2.setAttribute("minlength", "2");
  popUpSubtitle2.setAttribute("maxlength", "200");
  popUpSubtitle2.removeAttribute("type");

  popUpButtonSave.classList.remove(BUTTON_DISABLED);
});

//se setean los componentes para los requerimientos de formulario NUEVO LUGAR
profileButtonAdd.addEventListener("click", function () {
  defaultPop.openPopUp();
  popUpTitle.textContent = "Nuevo lugar";

  popUpSubtitle1.setAttribute("placeholder", "Título");
  popUpSubtitle1.setAttribute("minlength", "2");
  popUpSubtitle1.setAttribute("maxlength", "30");

  popUpSubtitle2.setAttribute("placeholder", "Enlace a la imagen");
  popUpSubtitle2.removeAttribute("minlength");
  popUpSubtitle2.removeAttribute("maxlength");
  popUpSubtitle2.setAttribute("type", "url");

  popUpButtonSave.classList.add(BUTTON_DISABLED);
});
