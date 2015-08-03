// constructor
var Bee = function() {
  Grub.call(Bee); // or Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = new Grub();
