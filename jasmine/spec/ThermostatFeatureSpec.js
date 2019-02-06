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
  it('cannot be decreased below 10 degrees', function() {
      for (var i = 0; i < 10; i++) {
        thermostat.tempDown();
      }
      expect( function() {thermostat.tempDown()
        }).toThrow(new Error("Cannot lower temperature below 10"))
      });
});
