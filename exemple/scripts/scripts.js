burgrContainers = document.querySelectorAll('.burgr-container');
burgrContainers.forEach(function(container) {
  container.onclick = function() {
    container.querySelector('.burgr').classList.toggle('active');
  };
});
