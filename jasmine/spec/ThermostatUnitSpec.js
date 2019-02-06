describe('Unit tests', function() {
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat();
  });
  it('Has a reset function', function() {
    expect( function() {thermostat.reset() }).not.toThrow(new Error)
  });

});
