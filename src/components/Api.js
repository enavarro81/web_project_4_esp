export default class Api {
  constructor({ baseUrl, authorization }) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
  }

  async getInitialCards() {
    const res = await fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`getInitialCards Error: ${res.status}`);
  }

  async getUserInformation() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`getUserInformation Error: ${res.status}`);
  }

  async postUserInformation({ userName, userJob }) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        about: userJob,
      }),
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`postUserInformation Error: ${res.status}`);
  }

  async postUserAvatar(userAvatar) {
    const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: userAvatar,
      }),
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`postUserAvatar Error: ${res.status}`);
  }

  async postCard({ name, link }) {
    const res = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`postCard Error: ${res.status}`);
  }

  async deleteCard(idCard) {
    const res = await fetch(`${this._baseUrl}/cards/${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`deleteCard Error: ${res.status}`);
  }

  async addLikeCard(idCard) {
    const res = await fetch(`${this._baseUrl}/cards/likes/${idCard}`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`addLike Error: ${res.status}`);
  }

  async removeLikeCard(idCard) {
    const res = await fetch(`${this._baseUrl}/cards/likes/${idCard}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`removeLikeCard Error: ${res.status}`);
  }
}
