$(window).on("load", function() {
		$(".loader .inner").fadeOut(500, function () {
			$(".loader").fadeOut(750);
		})

		$(".items").isotope({
		filter: '*',
		animationOptions:{
		transitionDuration: '0.8s',
		easing: 'linear',
		queue: false
		}
	});
})

$(window).on("load", function(){
	$(".loader .inner").fadeOut(500, function (){
		$(".loader").fadeOut(750);
	});
})

$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	let typed = new Typed(".typed", {
		strings: ["Software Engineer.","Full Stack Developer.","Data Analyst.","Data Scientist.","Designer." ],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$("[data-fancybox]").fancybox();

	$("#filters a").click(function () {

		$("#filters.current").removeClass("current");
		$(this).addClass("current");

		let selector = $(this).attr("data-filter");

		$(".items").isotope({
		filter: selector,
		animationOptions:{
			transitionDuration: '0.8s',
			easing: 'linear',
			queue: false
		}
	});
		return false;
	})

	$("#navigation li a").click(function(e){
		e.preventDefault();

		let targetElement = $(this).attr("href");
		let targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");
	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {
		const body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight()+ "px");
			body.addClass("fixedNav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

	}

});