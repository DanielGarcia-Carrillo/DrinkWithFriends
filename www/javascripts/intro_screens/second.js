document.addEventListener('DOMContentLoaded', function(ev) {
  $(document).hammer().on('swiperight', function(e) {
    var firstIntro = new steroids.views.WebView({
      location:  '/first.html'
    });
    
    var slideFromLeft = new steroids.Animation('slideFromLeft');
    steroids.layers.push({
      view: firstIntro,
      animation: slideFromLeft
    });
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