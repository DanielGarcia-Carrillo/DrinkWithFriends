steroids.view.navigationBar.hide();
document.addEventListener('DOMContentLoaded', function() {
  $('#opener').hammer().on('tap', function() {
    var otherView = new steroids.views.WebView({
      location: '/views/DrinkWithFriends/index.html'
	});
    steroids.layers.push({
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
  
   $('#first').hammer().on('tap', function() {
    var firstModal = new steroids.views.WebView('/first.html');
    steroids.modal.show(firstModal);
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
    var friendListView = new steroids.views.WebView({
		location: 'views/DrinkWithFriends/friendList.html'
	});
    steroids.layers.push({
		view: homePageView
	});
  });
  
});