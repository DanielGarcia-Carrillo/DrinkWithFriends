steroids.view.navigationBar.hide();
document.addEventListener("DOMContentLoaded", function() {
  $("#opener").hammer().on("tap", function() {
    var otherView = new steroids.views.WebView({
      location: "/views/DrinkWithFriends/index.html"
	});
    steroids.layers.push({
      view: otherView
    });
  });
});