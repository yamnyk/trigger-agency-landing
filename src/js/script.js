$( document ).ready(function() {
	
	const slowScroll = (id) => {
		$("".concat(id.split("")[0] === "." ? "" : "#").concat(id.toString())).on("click", function (event) {
			event.preventDefault();
			const scrollTo = $(this).attr('href'),
				top = $(scrollTo).offset().top;
			debugger;
			console.log(scrollTo);
			$('body,html').animate({
				scrollTop: top
			}, 1000);
		});
	};
	
	slowScroll('about-btn');
	slowScroll('about-b-btn');
	slowScroll('services-btn');
	slowScroll('services-b-btn');
	slowScroll('projects-btn');
	slowScroll('projects-b-btn');
	slowScroll('contacts-btn');
	slowScroll('contacts-b-btn');
	slowScroll('more-btn');
	
	
	$('#form__phone').mask('+38(999) 999-99-99')

	$('#orderForm').validate({
		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required:'Name field is required.'
			},
			email: {
				required:'Email field is required'
			},
			phone: {
				required:'Phone number field is required.'
			}
		}
	});

	$(function() {
		$("#orderForm").submit(function(event) {
			event.preventDefault();
			let data = {
				message:`
                Заказ индивидуальной консультации:
                Имя - ${$('#form__name').val()},
                Email - ${$('#form__email').val()},
                Телефон - ${$('#form__phone').val()},
                `,

			};
			$.ajax({
				type: "POST",
				url: "email.php",
				data: data,
				success: function(){
					alert(`
                Индивидуальная консультация на
                Имя - ${$('#form__name').val()},
                Email - ${$('#form__email').val()},
                Телефон - ${$('#form__phone').val()},
                Была успешно заказана `,);
				}
			});

			return false;
		});
	});

	/*MAP INITIALISATION*/
	mapboxgl.accessToken = 'pk.eyJ1IjoidHJpZ2dlciIsImEiOiJjanVpZHYxbDMwdXN5M3lzYXg5dzJ0Y3Y1In0.kc2qv99WmxmAf8RgZrwS4w';
	if (!mapboxgl.supported()) {
		alert('Your browser does not support Mapbox GL');
	} else {
		let map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [30.5933111, 50.4284607],
			zoom: 15
		});
		let marker = new mapboxgl.Marker()
			.setLngLat([30.5933111, 50.4284607])
			.addTo(map);
	}
});
