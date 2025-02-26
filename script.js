'use strict';

const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Functions
const clearInput = function () {
   input.value = '';
};

const createContainer = function () {
   let newItem = document.createElement('li');
   newItem.classList.add('list-container');
   return newItem;
};

const createP = function () {
   let inputText = document.createElement('p');
   inputText.textContent = input.value;
   return inputText;
};

const createDel = function () {
   let btn = document.createElement('button');
   btn.textContent = 'Delete';
   return btn;
};

const deleteContainer = function (button, container) {
   button.addEventListener('click', () => {
      container.remove();
   });
};

const addItem = function () {
   const container = createContainer();
   const p = createP();
   const deleteBtn = createDel();

   list.appendChild(container);
   container.appendChild(p);
   container.appendChild(deleteBtn);

   deleteContainer(deleteBtn, container);

   input.value = '';
};

// Add new list Item on click
button.addEventListener('click', () => {
   addItem();
});
