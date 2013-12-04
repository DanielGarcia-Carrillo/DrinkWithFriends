document.addEventListener('DOMContentLoaded', function(ev) {
  $(document).hammer().on('swiperight', function(e) {
    steroids.layers.pop();
  });
});