steroids.view.navigationBar.hide();
document.addEventListener('DOMContentLoaded', function() {
  $('#opener').hammer().on('tap', function() {
    var otherView = new steroids.views.WebView({
      location: '/views/DrinkWithFriends/index.html'
	});
    steroids.layers.push({
      tabBar: true,
      view: otherView
    });
  });
  
  $('#login').hammer().on('tap', function() {
    var loginModal = new steroids.views.WebView('/login.html');
    steroids.modal.show(loginModal);
  });
  
  $('#signup').hammer().on('tap', function() {
    var signupModal = new steroids.views.WebView('/signup.html');
    steroids.modal.show(signupModal);
  });
   
   $('#checkIn').hammer().on('tap', function() {
    var checkInView = new steroids.views.WebView({
		location: 'views/DrinkWithFriends/checkIn.html'
	});
    steroids.layers.push({
		view: homePageView
	});
  });
  
   $('#friendList').hammer().on('tap', function() {
    var checkInView = new steroids.views.WebView({
		location: 'views/DrinkWithFriends/friendList.html'
	});
    steroids.layers.push({
		view: homePageView
	});
  });
  
});