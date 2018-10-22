const PubSub = require("../helpers/pubsub.js");

const PrimeChecker = function(){};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return `${number} is not a Prime Number`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return `${number} is not a Prime Number`;
    }
  }
  return `${number} is a Prime Number`;
};

PrimeChecker.prototype.bindEvents = function(){
  PubSub.subscribe("FormView:text-submitted",(event)=>{
    const inputtedText = event.detail;
    const result = this.numberIsPrime(inputtedText);
    PubSub.publish("PrimeChecker:result-calculated",result);
  });
};
module.exports = PrimeChecker;
