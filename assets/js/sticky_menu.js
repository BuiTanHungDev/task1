$(document).ready(function() {
    $(window).scroll(function() {
        var header = $(".header");
        if (header) {
            header.toggleClass("sticky", $(this).scrollTop() > 0);
        }
    });
});
