function Thermostat() {
  var temperature;
  this.temperature = 20
  this.MINIMUM_TEMPERATURE = 10;
  var powerSaving;
  this.powerSaving = true;
};

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};

Thermostat.prototype.tempUp = function() {
  if (this.powerSaving === true && this.temperature < 25) {
    this.temperature += 1;
  }
  else {
    throw new Error("Power saving settings limit raising temperature.")
  }
};

Thermostat.prototype.tempDown = function() {
  if (this.temperature > this.MINIMUM_TEMPERATURE ) {
    this.temperature -= 1;
  }
  else {
    throw new Error("Cannot lower temperature below " + this.MINIMUM_TEMPERATURE + " degrees");
  }
};
