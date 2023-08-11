import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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
  buttonDisabled,
  inputNoDisplay,
  baseUrl,
  authorization,
} from "../utils/constans.js";

import "../pages/index.css"; // agrega la importación del archivo principal de hojas de estilo

export const apiClass = new Api({ baseUrl, authorization });

//inicializo el nombre a mostrar en la pagina
const UserName = new UserInfo();

const initialUserInfo = apiClass.getUserInformation();

//creo una función async y await para obligar a que termine de completar la consulta de la info del usuario y poder así
//mostrar el icono de delete dependiendo si es el dueño o no la card
async function setupUser() {
  try {
    const data = await initialUserInfo;
    UserName.setUserInfo({
      userName: data.name,
      userJob: data.about,
    });
    UserName.setUserAvatar({
      userAvatar: data.avatar,
    });
    UserName.setUserId({
      userId: data._id,
    });
    showUserInfo();
  } catch (e) {
    console.error(e);
  }
}

function showUserInfo() {
  profileName.textContent = UserName.getUserInfo().name;
  profileSubtitle.textContent = UserName.getUserInfo().job;
  profileAvatar.setAttribute("src", UserName.getUserInfo().avatar);
}

const initialCards = apiClass.getInitialCards();
initialCards
  .then(async (cards) => {
    //obligo que espere hasta tener el id del usuario para poder mostrar u ocultar el icono de delete en las cards
    if (!UserName.getUserInfo().id) {
      await setupUser();
    }

    const defaultCards = new Section(
      {
        data: cards,
        renderer: (item) => {
          const elementItem = new Card({
            data: item,
            handleCardClick: () => {
              const data = {
                image: event.target.src,
                title:
                  event.target.parentElement.children[2].children[0]
                    .textContent,
              };
              const defaultPopWithImage = new PopupWithImage(data, ".popup");
              defaultPopWithImage.openPopUp();
            },
            cardSelector: "#element-template",
          });
          const element = elementItem.generateCard(UserName.getUserInfo().id);

          defaultCards.addItem(element);
        },
      },
      ".elements"
    );

    defaultCards.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

export const defaultPop = new PopupWithForm({
  containerSelector: ".popup",
  formSelector: ".popup__input",
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    popUpButtonSave.textContent = "Guardando...";
    if (popUpTitle.textContent === "Editar perfil") {
      const data = defaultPop._getInputValues();

      const postUserInfo = apiClass.postUserInformation({
        userName: data["input-1"],
        userJob: data["input-2"],
      });

      postUserInfo
        .then(() => {
          UserName.setUserInfo({
            userName: data["input-1"],
            userJob: data["input-2"],
          });

          showUserInfo();
          defaultPop.closePopUp();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popUpButtonSave.textContent = "Guardar";
        });
    } else if (popUpTitle.textContent === "Nuevo lugar") {
      let data = {
        name: popUpMainSubtitle.value,
        link: popUpSubtitle.value,
      };

      const postCard = apiClass.postCard(data);

      postCard
        .then((resp) => {
          data = resp;
          const defaultCards = new Section(
            { data: [], renderer: () => {} },
            ".elements"
          );

          const elementItem = new Card({
            data,
            handleCardClick: () => {
              const data = {
                image: event.target.src,
                title:
                  event.target.parentElement.children[2].children[0]
                    .textContent,
              };
              const defaultPopWithImage = new PopupWithImage(data, ".popup");
              defaultPopWithImage.openPopUp();
            },
            cardSelector: "#element-template",
          });

          const item = elementItem.generateCard(data.owner._id);
          defaultCards.setAppendFalse();
          defaultCards.addItem(item);

          defaultPop.closePopUp();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popUpButtonSave.textContent = "Guardar";
        });
    } else if (popUpTitle.textContent === "Cambiar foto de perfil") {
      const postAvatar = apiClass.postUserAvatar(popUpMainSubtitle.value);

      postAvatar
        .then(() => {
          profileAvatar.setAttribute("src", popUpMainSubtitle.value);
          profileAvatar.setAttribute("alt", "avatar");
          defaultPop.closePopUp();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popUpButtonSave.textContent = "Guardar";
        });
    }
  },
});

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
