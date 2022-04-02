$(document).ready(function(){
    $("#b1").click(function(){
        alert("the text of the paragraph is" + $("#text").text());
    });
    $("#b2").click(function(){
        alert("the content is" + $("#text").html());
    });
    $("#b3").click(function(){
        alert("the content of form element is" + $("#i1").val());
    });
    $("#b4").click(function(){
        alert("the attributes are:" + $("#i1").attr("type"));
    });
    $("#b5").click(function(){
        $("#p1").text("hello how are you");
    });
    $("#b6").click(function(){
        $("#p2").html("<b>hello how are you</b>");
    });
    $("#b7").click(function(){
        $("#i1").val("hey i am form");
    });
    $("#b8").click(function(){
        $("p").append("bla");
    });
    $("#b9").click(function(){
        $("#d1").remove();
    });
    $("#b10").click(function(){
        $("#d2").empty();
    });
});
