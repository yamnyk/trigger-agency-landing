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


});



