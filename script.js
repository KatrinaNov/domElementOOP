'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function() {
  let newElem;
  if (this.selector[0] === '.') {
    newElem = document.createElement('div');
    newElem.classList.add(this.selector.slice(1));
  }
  if (this.selector[0] === '#') {
    newElem = document.createElement('p');
    newElem.id = this.selector.slice(1);
  }
  newElem.style.cssText = `height: ${this.height}px;
                            width: ${this.width}px;
                            background: ${this.bg};
                            font-size: ${this.fontSize}px;
                          `;
  newElem.textContent = prompt('Введите любой текст', 'Сегодня прекрасная погода');
  document.body.append(newElem);
};

const domElement = new DomElement('#block', 300, 600, 'orange', 30);
domElement.createElement();

