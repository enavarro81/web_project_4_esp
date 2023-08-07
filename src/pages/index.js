import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  profileName,
  profileSubtitle,
  profileButtonEdit,
  profileButtonAdd,
  profileAvatar,
  profileAvatarButtonEdit,
  popUpTitle,
  popUpMainSubtitle,
  popUpErrorMainSubtitle,
  popUpSubtitle,
  popUpErrorSubtitle,
  popUpButtonSave,
  initialCards,
  buttonDisabled,
  inputNoDisplay,
} from "../utils/constans.js";

import "../pages/index.css"; // agrega la importación del archivo principal de hojas de estilo

//inicializo el nombre a mostrar en la pagina
const UserName = new UserInfo(
  profileName.textContent,
  profileSubtitle.textContent
);

export const defaultPop = new PopupWithForm({
  containerSelector: ".popup",
  formSelector: ".popup__input",
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    if (popUpTitle.textContent === "Editar perfil") {
      const data = defaultPop._getInputValues();

      profileName.textContent = data["input-1"];
      profileSubtitle.textContent = data["input-2"];

      UserName.setUserInfo(data["input-1"], data["input-2"]);
    } else if (popUpTitle.textContent === "Nuevo lugar") {
      const data = {
        link: popUpSubtitle.value,
        name: popUpMainSubtitle.value,
      };

      const elementItem = new Card({
        data,
        handleCardClick: () => {
          const data = {
            image: event.target.src,
            title:
              event.target.parentElement.children[2].children[0].textContent,
          };
          const defaultPopWithImage = new PopupWithImage(data, ".popup");
          defaultPopWithImage.openPopUp();
        },
        cardSelector: "#element-template",
      });
      const item = elementItem.generateCard();

      defaultCards.setAppendFalse();
      defaultCards.addItem(item);
    } else if (popUpTitle.textContent === "Cambiar foto de perfil") {
      profileAvatar.setAttribute("src", popUpMainSubtitle.value);
      profileAvatar.setAttribute("alt", "avatar");
    }

    defaultPop.closePopUp();
  },
});

const defaultCards = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const elementItem = new Card({
        data: item,
        handleCardClick: () => {
          const data = {
            image: event.target.src,
            title:
              event.target.parentElement.children[2].children[0].textContent,
          };
          const defaultPopWithImage = new PopupWithImage(data, ".popup");
          defaultPopWithImage.openPopUp();
        },
        cardSelector: "#element-template",
      });
      const element = elementItem.generateCard();

      defaultCards.addItem(element);
    },
  },
  ".elements"
);

defaultCards.renderItems();

//se setean los componentes para los requerimientos de formulario EDITAR PERFIL
profileButtonEdit.addEventListener("click", function () {
  defaultPop.openPopUp();

  popUpTitle.textContent = "Editar perfil";

  popUpMainSubtitle.value = UserName.getUserInfo().name;
  popUpMainSubtitle.setAttribute("placeholder", "Nombre");
  popUpMainSubtitle.setAttribute("minlength", "2");
  popUpMainSubtitle.setAttribute("maxlength", "40");
  popUpMainSubtitle.removeAttribute("type");

  popUpSubtitle.value = UserName.getUserInfo().job;
  popUpSubtitle.setAttribute("placeholder", "Acerca de mi");
  popUpSubtitle.setAttribute("minlength", "2");
  popUpSubtitle.setAttribute("maxlength", "200");
  popUpSubtitle.removeAttribute("type");

  popUpMainSubtitle.classList.remove(inputNoDisplay);
  popUpErrorMainSubtitle.classList.remove(inputNoDisplay);
  popUpSubtitle.classList.remove(inputNoDisplay);
  popUpErrorSubtitle.classList.remove(inputNoDisplay);
  popUpButtonSave.classList.remove(buttonDisabled);
  popUpButtonSave.textContent = "Guardar";
});

//se setean los componentes para los requerimientos de formulario NUEVO LUGAR
profileButtonAdd.addEventListener("click", function () {
  defaultPop.openPopUp();
  popUpTitle.textContent = "Nuevo lugar";

  popUpMainSubtitle.setAttribute("placeholder", "Título");
  popUpMainSubtitle.setAttribute("minlength", "2");
  popUpMainSubtitle.setAttribute("maxlength", "30");
  popUpMainSubtitle.removeAttribute("type");

  popUpSubtitle.setAttribute("placeholder", "Enlace a la imagen");
  popUpSubtitle.removeAttribute("minlength");
  popUpSubtitle.removeAttribute("maxlength");
  popUpSubtitle.setAttribute("type", "url");

  popUpMainSubtitle.classList.remove(inputNoDisplay);
  popUpErrorMainSubtitle.classList.remove(inputNoDisplay);
  popUpSubtitle.classList.remove(inputNoDisplay);
  popUpErrorSubtitle.classList.remove(inputNoDisplay);
  popUpButtonSave.classList.add(buttonDisabled);
  popUpButtonSave.textContent = "Guardar";
});

profileAvatarButtonEdit.addEventListener("click", function () {
  defaultPop.openPopUp();
  popUpTitle.textContent = "Cambiar foto de perfil";

  popUpMainSubtitle.setAttribute("placeholder", "Enlace a la imagen");
  popUpMainSubtitle.removeAttribute("minlength");
  popUpMainSubtitle.removeAttribute("maxlength");
  popUpMainSubtitle.setAttribute("type", "url");

  popUpMainSubtitle.classList.remove(inputNoDisplay);
  popUpErrorMainSubtitle.classList.remove(inputNoDisplay);
  popUpSubtitle.classList.add(inputNoDisplay);
  popUpErrorSubtitle.classList.add(inputNoDisplay);
  popUpButtonSave.classList.add(buttonDisabled);
  popUpButtonSave.textContent = "Guardar";
});
