$(".textiles__option").on("click", function () {
	$(".textiles__option").removeClass("active");
	$(this).addClass("active");
	if ($(this).hasClass("textiles__option--clear")) {
		$(".shirt__overlay").fadeOut("fast");
	} else {
		const pattern = $(this).find("img").attr("src");
		if ($(".shirt__overlay:visible").length) {
			$(".shirt__overlay__pattern").fadeOut("fast", function () {
				$(".shirt__overlay__pattern")
					.css("background-image", "url(" + pattern + ")")
					.fadeIn("slow");
			});
		} else {
			$(".shirt__overlay__pattern").css(
				"background-image",
				"url(" + pattern + ")"
			);
			$(".shirt__overlay").fadeIn("fast");
		}
	}
});
