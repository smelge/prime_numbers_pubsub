const PubSub = require('../helpers/pubsub.js');

const InputText = function(){

};

InputText.prototype.bindEvents = function(){
  const form = document.querySelector('#prime-checker-form');
  // console.log('got form input');
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const inputtedText = event.target.number.value;
    console.log('Input: ',inputtedText);
  });
};

module.exports = InputText;
