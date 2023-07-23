export default class UserInfo {
  constructor(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    this._data = { name: this._userName, job: this._userJob };
    return this._data;
  }

  setUserInfo(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;
  }
}
