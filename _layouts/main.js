$(document).ready(function() {
	$(".menu-icon").click(function() {
		$(".trigger").toggleClass("hide").slideToggle('slow');
		console.log("success");
	})
});
