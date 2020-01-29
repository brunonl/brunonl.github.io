$(document).ready(function () {



	$('#pills-forgot-link').on('click', function () {

		$('#login-tab').removeClass('active')
		$('#forgot-tab').addClass('active')


	})

	$('#pills-login-link').on('click', function () {

		$('#login-tab').addClass('active')
		$('#forgot-tab').removeClass('active')


	})

	$('.customer-logos').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 2
			}
		}]
	});
});

// VALIDATION FORM

(function () {
	'use strict';
	window.addEventListener('load', function () {
		var forms = document.getElementsByClassName('needs-validation');
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();


$(function () {
	$('#search').on('keyup', function () {
		var pattern = $(this).val();
		$('.searchable-container .items').hide();
		$('.searchable-container .items').filter(function () {
			return $(this).text().match(new RegExp(pattern, 'i'));
		}).show();
	});
});



$(document).ready(function () {

	var current_fs, next_fs, previous_fs; //fieldsets
	var opacity;
	var current = 1;
	var steps = $("fieldset").length;

	setProgressBar(current);

	$(".next").click(function () {

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

		//Add Class Active
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

		//show the next fieldset
		next_fs.show();
		//hide the current fieldset with style
		current_fs.animate({ opacity: 0 }, {
			step: function (now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				next_fs.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(++current);
	});

	$(".previous").click(function () {

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

		//Remove class active
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

		//show the previous fieldset
		previous_fs.show();

		//hide the current fieldset with style
		current_fs.animate({ opacity: 0 }, {
			step: function (now) {
				// for making fielset appear animation
				opacity = 1 - now;

				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				previous_fs.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(--current);
	});

	function setProgressBar(curStep) {
		var percent = parseFloat(100 / steps) * curStep;
		percent = percent.toFixed();
		$(".progress-bar")
			.css("width", percent + "%")
	}

	$(".submit").click(function () {
		return false;
	})

});


// var tl = anime.timeline({
//   //easing: 'easeOutExpo',
//     //duration: 750,
//     autoplay: true,
//   loop: false
//   });


//   tl
//   .add({
//     targets: '.success',
//     scale:[0.001, 1],
//     rotate:[100,360],
//     opacity: [0.001, 1],
//     //easing: 'easeOutExpo',
//     //translateY: 50, 
//     duration: 1000

//   },)


//   .add({
//     targets: '.checkmark',
//     // transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     // scale:[0.001, 1],
//     duration: 500,
//     easing: 'easeInOutSine',

//     strokeDashoffset: [anime.setDashoffset, 0],
//   },200)

//   .add({
//     targets: '.line1',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.000, 1],
//     duration: 1000

//   },400)

//   .add({
//     targets: '.line2',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.001, 1],
//     duration: 1000

//   },300)

//   .add({
//     targets: '.line3',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.001, 1],
//     duration: 1000

//   },400)

//   .add({
//     targets: '.line4',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.001, 1],
//     duration: 1000

//   },400)

//   .add({
//     targets: '.line5',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.001, 1],
//     duration: 1000

//   },300)

//   .add({
//     targets: '.line6',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.001, 1],
//     duration: 1000

//   },400)

//   .add({
//     targets: '.line7',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.001, 1],
//     duration: 1000

//   },300)

//   .add({
//     targets: '.line8',
//     transformOrigin: ['50% 50% 0px', '50% 50% 0px'],
//     opacity: {
//       value:[0, 1],
//       delay:50,
//     },
//     scale:[0.001, 1],
//     duration: 1000

//   },400)

//   .add({
//     targets: ['.line1','.line2','.line3','.line4','.line5','.line6','.line7','.line8'],
//     opacity: [1, 0],
//     //delay:100,
//     duration: 300,
//     easing: 'easeInSine',
//    // endDelay:500

//   },'-=300')

//   .add({
//     targets: ['.success'],
//     opacity: [1, 0],
//     delay:200,
//     duration: 300,
//     easing: 'easeInSine',
//     endDelay:500

//   },'-=300')




//   // document.querySelector('.play').onclick = tl.restart;


  // function initialize() {
  //   var input = document.getElementById('endereco-completo');
  //   new google.maps.places.Autocomplete(input);
  // }

  // google.maps.event.addDomListener(window, 'load', initialize);