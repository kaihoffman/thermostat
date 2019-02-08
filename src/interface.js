$(document).ready(function () {
  thermostat = new Thermostat;
  updateTemperatureDisplay();
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

$('#tempReset').on('click', function () {
  thermostat.reset();
  updateTemperatureDisplay();
})
