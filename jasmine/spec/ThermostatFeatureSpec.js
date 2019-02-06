describe('Features', function() {
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.getTemp()).toBe(20)
  });
  it('can be increased with an up function', function() {
    thermostat.tempUp();
    expect(thermostat.getTemp()).toBe(21);
    });
  it('can be decreased with a down function', function() {
    thermostat.tempDown();
    expect(thermostat.getTemp()).toBe(19);
    });
});
