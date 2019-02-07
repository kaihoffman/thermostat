function Thermostat () {
  var temperature
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE
  this.MEDIUM_USAGE_LIMIT = 18;
  this.MINIMUM_TEMPERATURE = 10
  var powerSaving
  this.powerSaving = true
};

Thermostat.prototype = {
  getTemp: function () {
    return this.temperature
  },
  tempUp: function () {
    if (this.powerSaving === true && this.temperature < 25) {
      this.temperature += 1
    } else if (this.powerSaving === false && this.temperature < 32) {
      this.temperature += 1
    } else {
      throw new Error('Temperature limit reached.')
    }
  },
  tempDown: function () {
    if (this.temperature > this.MINIMUM_TEMPERATURE) {
      this.temperature -= 1
    } else {
      throw new Error('Cannot lower temperature below ' + this.MINIMUM_TEMPERATURE + ' degrees')
    }
  },
  reset: function () {
    this.temperature = this.DEFAULT_TEMPERATURE
  },
  turnPowerSavingOff: function () {
    this.powerSaving = false
  },
  turnPowerSavingOn: function () {
    this.powerSaving = true
  },
  energyUsage: function () {
    if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
      return ('Low usage')
    } else if (this.temperature > this.MEDIUM_USAGE_LIMIT && this.temperature < 25) {
      return ('Medium usage')
    } else return ('High usage')
  }
}
