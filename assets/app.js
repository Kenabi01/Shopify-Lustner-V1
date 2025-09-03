document.addEventListener('DOMContentLoaded', function () {
  var wrapper = document.getElementById('horizontal-wrapper');
  var buttons = document.querySelectorAll('.bottom-nav button');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var index = button.dataset.index;
      wrapper.style.transform = 'translateX(-' + index * 100 + 'vw)';
    });
  });
});

