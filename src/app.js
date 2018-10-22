const InputText = require('./views/input_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
  const inputText = new InputText();
  inputText.bindEvents();

});
