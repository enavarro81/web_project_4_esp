//-----------------------------------------------------------------------------------------
// esta clase permite consultar y actualizar la información del usuario
//-----------------------------------------------------------------------------------------

export default class UserInfo {
  constructor(userName, userJob, userAvatar, userId) {
    this._userName = userName;
    this._userJob = userJob;
    this._userAvatar = userAvatar;
    this._userId = userId;
  }

  getUserInfo() {
    this._data = {
      name: this._userName,
      job: this._userJob,
      avatar: this._userAvatar,
      id: this._userId,
    };
    return this._data;
  }

  setUserInfo({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
  }

  setUserAvatar({ userAvatar }) {
    this._userAvatar = userAvatar;
  }

  setUserId({ userId }) {
    this._userId = userId;
  }
}
