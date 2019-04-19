const gogi = 'gogi';
const notGogi = 'not gogi';

$( document ).ready(function() {
	
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
