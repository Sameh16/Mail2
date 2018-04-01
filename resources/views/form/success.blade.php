<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
    <meta charset="utf-8" />
    <title>
        MOIC | Mega event
    </title>

    <meta name="description" content="MOIC mega event">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('css/bootstrap-grid.min.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{asset('css/animate.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('css/form.css')}}" rel="stylesheet" type="text/css" />
    <link rel="icon" href="{{asset('img/favicon.ico')}}" type="image/x-icon" />
    <link href="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/theme-default.min.css" rel="stylesheet" type="text/css"
    />
    <style>
        @import url('https://fonts.googleapis.com/css?family=Cairo');
    </style>
</head>
<!-- end::Head -->

<body dir="rtl" class="success">
    <div class="container custom-scrollbar custom-text-selection">
     
        <header id="header">
            <h1 class="wow slideInUp">
                <i class="fa  fa-rocket "></i>
                مويك ! الحدث الرئيسي
                <i class="fa  fa-rocket "></i>
            </h1>
            <p class="wow slideInUp" style="margin-top:40px;">شكرأ لك يا أحمد على التسجيل في الحدث الأهم في تاريخ مويك ! </p>
        </header>
   



        <script src="{{asset('js/jQuery.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/bootstrap.min.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/form.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/wow.min.js')}}"></script>
        <script src="{{asset('js/jquery.validate.min.js')}}"></script>
        <script src="{{asset('js/addMethods.js')}}"></script>
        <script src="{{asset('js/validation.js')}}"></script>
        <script>
            new WOW().init();
        </script>
        <script>
            (function ($) {
                function floatLabel(inputType) {
                    $(inputType).each(function () {
                        var $this = $(this);
                        // on focus add cladd active to label
                        $this.focus(function () {
                            $this.next().addClass("active");
                        });
                        //on blur check field and remove class if needed
                        $this.blur(function () {
                            if ($this.val() === '' || $this.val() === 'blank') {
                                $this.next().removeClass();
                            }
                        });
                    });
                }
                // just add a class of "floatLabel to the input field!"
                floatLabel(".floatLabel");
            })(jQuery);
        </script>

</body>

</html>