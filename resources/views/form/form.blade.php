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

<body dir="ltr">
    <div class="container">
        <header id="header">
            <h1 class="wow slideInUp">
                <i class="fa  fa-rocket "></i>
                مويك ! الحدث الرئيسي
                <i class="fa  fa-rocket "></i>
            </h1>
            <p class="wow slideInUp" style="margin-top:40px;">هذا الحدث هو أكبر حدث في تاريخ مويك الحديث, فأحرص على التسجيل والحضور كي لا تندم غدا !</p>
        </header>

        <h1 class="bg-text hidden-lg-down">خطوة لإحياء أمة. </h1>
        {!! Form::open(['action' => 'FormController@store' , 'method' => 'post','id'=>"register-form"]) !!}
            <div class="form-group">
                <div class="controls wow slideInUp">
                    <input type="text" class="floatLabel" name="name">
                    <label for="name">الأسم بالكامل</label>
                </div>
                <div class="controls wow slideInUp">
                    <input type="email" class="floatLabel" name="email">
                    <label for="email">البريد الإلكتروني</label>
                </div>

                <div class="controls wow slideInUp">
                    <input type="number" class="floatLabel" name="phone">
                    <label for="phone">رقم الهاتف</label>
                </div>

                <div class="controls wow slideInUp">
                    <input type="number" class="floatLabel" name="age">
                    <label for="age">السن</label>
                </div>

                <div class="controls wow slideInUp">
                    <input type="text" class="floatLabel" name="school">
                    <label for="school">الكلية / المدرسة</label>
                </div>


                <div class="controls wow slideInUp">
                    <input type="text" class="floatLabel" name="address">
                    <label for="address">العنوان</label>
                </div>

                <div class="controls wow slideInUp">
                    <i class="fa fa-sort"></i>
                    <select class="floatLabel" name="grad">
                        <option value=""></option>
                        <option value="done">خريج</option>
                        <option value="stud">طالب</option>
                        <option value="other">اخرى</option>
                    </select>
                    <label for="grad">خريج / طالب</label>
                </div>

                <div class="controls wow slideInUp">
                    <i class="fa fa-sort"></i>
                    <select id="workShop" class="floatLabel" name="workshopsel">
                        <option value=""></option>
                        <option value="ws1">اولى </option>
                        <option value="ws2">ثانية</option>
                        <option value="ws3">ثالثة</option>
                        <option value="ws4">رابعة</option>
                        <option value="ws5">خامسة</option>
                        <option value="ws6">سادسة</option>
                        <option value="ws7">سابعة</option>
                        <option value="ws8">ثامنة</option>
                        <option value="ws9">تاسعة</option>
                        <option value="ws10">عاشرة</option>
                    </select>
                    <label for="workshopsel">ورشة العمل</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws1">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">اولى</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws2">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ثانية</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws3">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاي او اس</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws4">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاندرويد</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws5">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاي او اس</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws6">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاندرويد</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws7">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاي او اس</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws8">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاندرويد</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws9">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاي او اس</label>
                </div>

                <div class="controls col-md-10 wow slideInUp" id="ws10">
                    <input type="text" class="floatLabel" name="wsInfo">
                    <label for="wsInfo">ماذا تعرف عن الاندرويد</label>
                </div>


                <div class="controls wow slideInUp">

                    <fieldset class="form-group-radio">
                        <label>هل حضرت ورش عمل مويك من قبل ؟ </label><br><br>
                        <div class="form-check" style="margin-bottom:10px;">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="attended" value="yes">
                                <p style="margin-right: 20px;margin-top: 5px;" > نعم </p><span></span>
                            </label>
                        </div>

                        <div class="form-check" style="margin-bottom:10px;">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="attended" value="no">
                                <p style="margin-right: 20px;margin-top: 5px;" > ﻻ </p>
                            </label>
                        </div>
                    </fieldset>

                </div>
                <br>
                <br>
                <br>
                <div class="controls wow bounceIn">
                    <button type="submit" id="submit-button">Submit</button>
                </div>
            </div>
        {!! Form::close() !!}
        



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