var HoneyMakerBee = function() {
  Bee.call(this);
};

HoneyMakerBee.prototype = new Bee();

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.age = 10;

HoneyMakerBee.prototype.job = 'make honey';

HoneyMakerBee.prototype.honeyPot = 0;

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
}
