'use strict';

const DomElement = function(selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
};

DomElement.prototype.createNewElement = function() {
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
                            position: ${this.position};
                          `;
  newElem.textContent = prompt('Введите любой текст', 'Сегодня прекрасная погода');
  document.body.append(newElem);
};
DomElement.prototype.eventKeyDown = function() {
  let square = document.querySelector(this.selector);
  document.addEventListener('keydown', function(e){
    
      switch (e.key) {
        case 'ArrowDown':
          if ((square.offsetTop + square.offsetHeight) <= document.documentElement.clientHeight ) {
          square.style.top = square.offsetTop + 10 + 'px';
          }
          break;
        case 'ArrowUp':
          if (square.offsetTop >= 0) {
            square.style.top = square.offsetTop - 10 + 'px';
          }
          break;
        case 'ArrowLeft':
          if (square.offsetLeft >= 0) {
          square.style.left = square.offsetLeft - 10 + 'px';
          }
          break;
        case 'ArrowRight':
          if ((square.offsetLeft + square.offsetWidth) <= document.documentElement.clientWidth ) {
          square.style.left = square.offsetLeft + 10 + 'px';
          }
          break;
      }
    
  });
};

document.addEventListener('DOMContentLoaded', function() {

  const newElement = new DomElement('.square', 100, 100, 'orange', 16, 'absolute');
  newElement.createNewElement();  
  newElement.eventKeyDown();  
  
});

