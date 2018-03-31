 jQuery(window).scroll(function () {
     var top = jQuery(window).scrollTop();
     if (top > 30) // height of float header
         jQuery('#header').addClass('top-bar');
     else
         jQuery('#header').removeClass('top-bar');
 })

 $(document).ready(function () {
    toggleFields();
    $("#workShop").change(function () {
        toggleFields();
    });

});
function toggleFields() {
    if ($("#workShop").val() === "ws1"){
        $("#ws1").show();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();

    }

    else  if ($("#workShop").val() === "ws2"){
        $("#ws1").hide();
        $("#ws2").show();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();

    }
    else  if ($("#workShop").val() === "ws3"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").show();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws4"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").show();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws5"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").show();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws6"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").show();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws7"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").show();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }            
    else  if ($("#workShop").val() === "ws8"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").show();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws9"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").show();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws10"){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").show();
    }
    else if ($("#workShop").val() === ""){
        $("#ws1").hide();
        $("#ws2").hide();
        $("#ws3").hide();
        $("#ws4").hide();
        $("#ws5").hide();
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    
    }
}

