/**
 * Enables the fixed headers and time lane for the shift-calendar and datatables
 */
$(document).ready(function () {
    if ($('.shift-calendar').length) {
        var timeLanes = $('.shift-calendar .time');
        var headers = $('.shift-calendar .header');
        var topReference = $('.container-fluid .row');
        timeLanes.css({
            'position': 'relative',
            'z-index': 999
        });
        headers.css({
            'position': 'relative',
            'z-index': 900
        });
        $(window).scroll(
            function () {
                var top = headers.parent().offset().top;
                var left = 15;
                timeLanes.css({
                    'left': Math.max(0, $(window).scrollLeft() - left) + 'px'
                });
                headers.css({
                    'top': Math.max(0, $(window).scrollTop() - top
                        - 13
                        + topReference.offset().top)
                        + 'px'
                });
            });
    }
});
