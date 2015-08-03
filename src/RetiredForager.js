var RetiredForagerBee = function() {
  ForagerBee.call(this);
};

RetiredForagerBee.prototype = new ForagerBee();

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.age = 40;

RetiredForagerBee.prototype.job = 'gamble';

RetiredForagerBee.prototype.canFly = false;

RetiredForagerBee.prototype.color = 'grey';

//RetiredForagerBee.treasureChest = [];

RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
};


RetiredForagerBee.prototype.gamble = function(treasure){
  this.treasureChest.push(treasure);
}
