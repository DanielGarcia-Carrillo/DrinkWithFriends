document.addEventListener('DOMContentLoaded', function(ev) {
  $(document).hammer().on('swiperight', function(e) {
    var secondIntro = new steroids.views.WebView({
      location: '/second.html'
	});
    
    var slideFromLeft = new steroids.Animation('slideFromLeft');
    steroids.layers.push({
      view: secondIntro,
      animation: slideFromLeft
    });
  });
});