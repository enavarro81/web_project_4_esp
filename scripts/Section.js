//-----------------------------------------------------------------------------------------
// esta clase permite agregar elementos nuevos en el DOM
//-----------------------------------------------------------------------------------------

export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._isAppend = true;
  }

  addItem(element) {
    this._isAppend === true
      ? this._container.append(element)
      : this._container.prepend(element);
  }

  setAppendFalse() {
    this._isAppend = false;
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
