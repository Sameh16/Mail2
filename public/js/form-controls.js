$(document).ready(function () {

    $('#reg-form').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 5
            }
        },
        submitHandler: function (form) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });

});