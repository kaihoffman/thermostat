$(document).ready(function () {
  thermostat = new Thermostat;
  $('#TempControl').text(thermostat.temperature);
})

function updateTemperatureDisplay() {
  $('#TempControl').text(thermostat.temperature);
}

$('#tempUp').on('click', function() {
  thermostat.tempUp();
  updateTemperatureDisplay();
});

$('#tempDown').on('click', function () {
  thermostat.tempDown();
  updateTemperatureDisplay();
})
