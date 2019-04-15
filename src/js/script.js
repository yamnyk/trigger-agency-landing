const gogi = 'gogi';
const notGogi = 'not gogi';

$( document ).ready(function() {

    $('#phone').mask('+38(999) 999-99-99')

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



});



