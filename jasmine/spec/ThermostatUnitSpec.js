describe('Unit tests', function() {
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat();
  });
  it('has a function to set power saving off', function () {
    thermostat.turnPowerSavingOff();
    expect(thermostat.powerSaving).toBe(false);
  });
  it('has a function to set power saving on', function () {
    thermostat.turnPowerSavingOff();
    thermostat.turnPowerSavingOn();
    expect(thermostat.powerSaving).toBe(true);
  })
});
