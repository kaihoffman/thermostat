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
  if (this.temperature > 10) {
    this.temperature -= 1;
  }
  else {
    throw new Error("Cannot lower temperature below 10");
  }
};
