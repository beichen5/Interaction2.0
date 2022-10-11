$("p").css({"color":"white"});
$(".trigger").on("click", function(){
    $("p").css({"color":"palevioletred"})
})
$("p").on("click", function(){
    $(this).css({"color":"palevioletred"})
})
$("p").on("mouseover", function(){
    $(this).css({"color":"azure"})
})