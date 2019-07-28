$(document).ready(function() {
    // Here, we want to make sure the header takes up the window’s height so we are going to use a little JQuery code.
    $('.header').height($(window).height());
    $(".navbar a").click(function() {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)

    })
});