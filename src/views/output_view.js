const PubSub = require('../helpers/pubsub.js');

const ResultView = function (){};

ResultView.prototype.bindEvents = function(){
  console.log('Here')
  PubSub.subscribe("PrimeChecker:result-calculated",(event)=>{
    const primeResult = event.detail;
    // console.log('Result: ',primeResult);
    this.displayResult(primeResult);
  });
};

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector("#result");
  resultElement.textContent = result;
};
module.exports = ResultView;
