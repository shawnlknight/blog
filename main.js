// js for site

// jQuery for drop down menu on mobile. Once incorporated, remove hover effect from .trigger in css
$(document).ready(function() {
	$(".menu-icon").click(function() {
		$(".trigger").toggleClass("hide");
	});

	$(window).resize(function () {
		if ($(".mainNav").is('visible')) {
			$(".trigger").hide();
		} else {
			$(".trigger").addClass("hide");
		}
	});

	
});

