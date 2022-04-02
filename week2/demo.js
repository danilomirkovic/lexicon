/*--------------------------
$(document).ready(function(){
    $("button").click(function(){
        $("#clickme").hide(); //or $("p")...or for class $(".test")
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});
----------------------*/

//jq fade fadeIn

/*-----------------------------
$(document).ready(function(){
    $("#f1").click(function(){
        $("#fade").fadeOut(3000);
    });
    $("#f1").click(function(){
        $("#fade").fadeIn(3000);
    });
});
----------------------------------*/

//jq slide event

/*$(document).ready(function(){
    $("#slide").click(function(){
        $("#id1").slideToggle(); //slideUp..Down
    });
});*/

//jq animate

$(document).ready(function(){
    $("#a1").click(function(){
        $("#animate").animate({left:"240px"});
    });
});