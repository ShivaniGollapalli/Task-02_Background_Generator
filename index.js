window.addEventListener('DOMContentLoaded', function() {
    var generateBtn = document.getElementById('generateBtn');
  
    generateBtn.addEventListener('click', function() {
      var color1 = document.getElementById('color1').value;
      var color2 = document.getElementById('color2').value;
      var gradient = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
      document.body.style.backgroundImage = gradient;
    });
  });