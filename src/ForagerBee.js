var ForagerBee = function() {
  Bee.call(this);
  this.treasureChest = [];
};

ForagerBee.prototype = new Bee();
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.age = 10;
ForagerBee.prototype.job = "find pollen";
ForagerBee.prototype.canFly = true;
//ForagerBee.treasureChest = [];
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
};
