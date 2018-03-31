 jQuery(window).scroll(function() {
     var top = jQuery(window).scrollTop();
     if (top > 30) // height of float header
         jQuery('#header').addClass('top-bar');
     else
         jQuery('#header').removeClass('top-bar');
 })

 var temp = "-1";
 $(document).ready(function() {
     toggleFields();
     $("#workShop").change(function() {
         toggleFields();
     });

 });


 function toggleFields() {

     if (temp != "-1") {
         var x = "#" + temp;
         $(x).remove();
         temp = "-1";
     }
     if ($("#workShop").val() === "ws1") {
         var text = ' <div id="1"><div class="controls col-md-10 wow slideInUp" id="ws1">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">اولى</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "1";
     } else if ($("#workShop").val() === "ws2") {
         var text = ' <div id="2"><div class="controls col-md-10 wow slideInUp" id="ws2">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo"></label>' +
             '</div><\div>';
         $("#workShop").after(text);
         temp = "2";
     } else if ($("#workShop").val() === "ws3") {
         var text = ' <div id="3"><div class="controls col-md-10 wow slideInUp" id="ws3">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">ماذا تعرف عن الاي او اس</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "3";
     } else if ($("#workShop").val() === "ws4") {
         var text = ' <div id="4"><div class="controls col-md-10 wow slideInUp" id="ws4">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">الرابعه</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "4";
     } else if ($("#workShop").val() === "ws5") {
         var text = '<div id="5"> <div class="controls col-md-10 wow slideInUp" id="ws5">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">الخامسه</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "5";
     } else if ($("#workShop").val() === "ws6") {
         var text = '<div id="6"> <div class="controls col-md-10 wow slideInUp" id="ws6">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">السادس</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "6";
     } else if ($("#workShop").val() === "ws7") {
         var text = '<div id="7"> <div class="controls col-md-10 wow slideInUp" id="ws7">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">السابعه</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "7";
     } else if ($("#workShop").val() === "ws8") {
         var text = '<div id="8"> <div class="controls col-md-10 wow slideInUp" id="ws8">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">الثامنه</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "8";
     } else if ($("#workShop").val() === "ws9") {
         var text = '<div id="9"> <div class="controls col-md-10 wow slideInUp" id="ws9">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">التاسعه</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "9";
     } else if ($("#workShop").val() === "ws10") {
         var text = '<div id="10"> <div class="controls col-md-10 wow slideInUp" id="ws10">' +
             '<input type="text" class="floatLabel" name="wsInfo">' +
             '<label for="wsInfo">العاشره</label>' +
             '</div></div>';
         $("#workShop").after(text);
         temp = "10";
     }




 }