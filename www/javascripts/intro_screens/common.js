steroids.view.navigationBar.hide();
document.addEventListener('DOMContentLoaded', function() {
 
  $('#login').hammer().on('tap', function() {
    steroids.modal.hide({}, {
      onSuccess: function() {
        var loginModal = new steroids.views.WebView('/login.html');
        steroids.modal.show(loginModal);
      }
    });
  });
  
  $('#signup').hammer().on('tap', function() {
    steroids.modal.hide({}, {
      onSuccess: function() {
        var signupModal = new steroids.views.WebView('/signup.html');
        steroids.modal.show(signupModal);
      }
    });
  });
//   
//   $('#checkIn').hammer().on('tap', function() {
//    var checkInView = new steroids.views.WebView({
//		location: 'views/DrinkWithFriends/checkIn.html'
//	});
//    steroids.layers.push({
//		view: homePageView
//	});
//  });
//  
//   $('#friendList').hammer().on('tap', function() {
//    var friendListView = new steroids.views.WebView({
//		location: 'views/DrinkWithFriends/friendList.html'
//	});
//    steroids.layers.push({
//		view: homePageView
//	});
//  });
  
});