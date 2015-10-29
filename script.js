//reset function;

$("#reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});


$("#reset2").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});


$(document).ready(function(){
    $("form").submit(function(){
        alert("Thank you for your feedback");
    });
});
