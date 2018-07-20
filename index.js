
AOS.init({
 })

$(".btn--btnDiv").click(function() {
    $('html,body').animate({
        scrollTop: $(".heading-tertiary").offset().top},
        'slow');
});


$(".projectBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        'slow');
});

