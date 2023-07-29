function volume_sphere() {
  const radiusInput = document.getElementById('radius');
  const volumeInput = document.getElementById('volume');

  const radius = parseFloat(radiusInput.value);

  if (!isNaN(radius)) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2);
  } else {
    volumeInput.value = '';
  }

  return false; // Prevent form submission
}

window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
