$("p").css({"color":"green"});
$(".trigger").on("click", function(){
    $("h1").css({"color":"red"})
})
$("p").on("click", function(){
    $(this).css({"color":"red"})
})
$("p").on("mouseover", function(){
    $(this).css({"color":"blue"})
})