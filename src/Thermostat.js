function Thermostat() {
  var temperature;
  this.temperature = 20;
};

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};

Thermostat.prototype.tempUp = function() {
  this.temperature += 1;
};

Thermostat.prototype.tempDown = function() {
  this.temperature -= 1;
};
