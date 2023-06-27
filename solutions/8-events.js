export default () => {
  // BEGIN
  const alertGenerator = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');
  
  let alertIndex = 1;
  
  alertGenerator.addEventListener('click', function() {
  const newAlert = document.createElement('div');
  newAlert.classList.add('alert', 'alert-primary');
  newAlert.textContent = `Alert ${alertIndex}`;

  alertsContainer.prepend(newAlert);
  
  alertIndex++;
  });
  // END
  };