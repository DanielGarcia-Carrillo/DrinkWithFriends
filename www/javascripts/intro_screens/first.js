document.addEventListener('DOMContentLoaded', function(ev) {
  $(document).hammer().on('swipeleft', function(e) {
    var secondIntro = new steroids.views.WebView({
      location: '/second.html'
	});
    var slideFromRight = new steroids.Animation('slideFromRight');
    steroids.layers.push({
      view: secondIntro,
      animation: slideFromRight
    });
  });
});