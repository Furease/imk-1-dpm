$(document).ready(function () {
	// $(".view").on("click", function () {
	// 	var src = $(this).data("image");
	// 	var alt = $(this).data("alt");

	// 	$(".popup_image").attr("src", src);
	// 	$(".popup_image").attr("alt", alt);
	// });
	// $("#tampilPengumumanModal").modal("show");
	$('.collapse-button').click( function () {
		$(this).children('i').toggleClass('fa-chevron-circle-up fa-chevron-circle-right');
	  });
});


$('a.struktur').addClass('border-0 rounded-lg');
$('span.struktur').addClass("h6 text-white");	
$('span.struktur').children('i').removeClass("fa-fw").addClass('fa-lg');