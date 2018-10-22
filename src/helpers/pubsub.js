const PubSub = {
  publish: function(channel,payload){
    console.log(`Published on channel ${channel}. Payload is ${payload}`);
    const event = new CustomEvent(channel,{detail:payload});
    document.dispatchEvent(event);
  },
  subscribe: function(channel,callback){
    console.log(`Subscribed to channel: ${channel}`);
    document.addEventListener(channel,callback);
  }
};
module.exports = PubSub;
