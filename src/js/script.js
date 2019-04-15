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
        $("#submitBtn").click(function(event) {
            event.preventdefault();
            let data = {
                name: $("#form__name").val(),
                email: $("#form__email").val(),
                phone: $("#form__phone").val()
            };
            $.ajax({
                type: "POST",
                url: "email.php",
                data: data,
                success: function(){
                    $('.success').fadeIn(1000);
                }
            });

            return false;
        });
    });


});



