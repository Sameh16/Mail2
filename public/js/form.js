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
        $("#ws1-1").show();
        $("#ws1-2").show();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();

        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();

    }

    else  if ($("#workShop").val() === "ws2"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").show();
        $("#ws2-2").show();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();

    }
    else  if ($("#workShop").val() === "ws3"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").show();
        $("#ws3-2").show();
        $("#ws3-3").show();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws4"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").show();
        $("#ws4-2").show();
        $("#ws4-3").show();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws5"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").show();
        $("#ws5-2").show();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws6"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").show();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws7"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").show();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    }            
    else  if ($("#workShop").val() === "ws8"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").show();
        $("#ws9").hide();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws9"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").show();
        $("#ws10").hide();
    }
    else  if ($("#workShop").val() === "ws10"){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").show();
    }
    else if ($("#workShop").val() === ""){
        $("#ws1-1").hide();
        $("#ws1-2").hide();
      
        $("#ws2-1").hide();
        $("#ws2-2").hide();
      
        $("#ws3-1").hide();
        $("#ws3-2").hide();
        $("#ws3-3").hide();
      
        $("#ws4-1").hide();
        $("#ws4-2").hide();
        $("#ws4-3").hide();

        $("#ws5-1").hide();
        $("#ws5-2").hide();
              
        $("#ws6").hide();
        $("#ws7").hide();
        $("#ws8").hide();
        $("#ws9").hide();
        $("#ws10").hide();
    
    }
}

