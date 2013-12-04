document.addEventListener('DOMContentLoaded', function(ev) {
  $(document).hammer().on('swiperight', function(e) {
    steroids.layers.pop();
  });
  
  $(document).hammer().on('swipeleft', function(e) {
    var thirdIntro = new steroids.views.WebView({
      location: '/third.html'
	});
    
    var slideFromRight = new steroids.Animation('slideFromRight');
    steroids.layers.push({
      view: thirdIntro,
      animation: slideFromRight
    });
  });
});