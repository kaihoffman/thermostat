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
      }).toThrow(new Error("Cannot lower temperature below 10 degrees"))
      });
  it('has a power saving mode that maximises temperature to 25', function() {
    thermostat.powerSaving = true;
    for (var i = 20; i < 25; i++) {
        thermostat.tempUp();
    }
    expect( function() { thermostat.tempUp()} ).toThrow(new Error("Temperature limit reached."))
  });

  it('allows temperature of 32 as maximum if power saving off', function() {
    thermostat.powerSaving = false;
    for (var i = 20; i < 32; i++) {
      thermostat.tempUp();
    }
    expect ( function() { thermostat.tempUp() }).toThrow(new Error("Temperature limit reached."))
  });

  it('Power saving is on by default', function() {
    expect(thermostat.powerSaving).toBe(true);
  });

  it('Has a reset function that sets the temp to 20', function () {
    for (var i = 20; i < 25; i++) {
        thermostat.tempUp();
    }
    expect(thermostat.getTemp()).toBe(25)
    thermostat.reset();
    expect(thermostat.getTemp()).toBe(20)
  });
});
