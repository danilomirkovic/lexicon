$(document).ready(function(){
    $("#b1").click(function(){
        $("p").toggleClass("demo1")
    });
    $("#b2").click(function(){
        alert("the styles are" + $("p").css());
    });
});