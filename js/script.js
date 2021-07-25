$(window).on('load', function() {

    $(".navbar-toggler").click(function() {
        if ($(".navbar-toggler").hasClass("collapsed")) {
            $(".collapse-bg").css({
                display: 'none'
            });
        } else {
            $(".collapse-bg").css({
                display: 'block'
            });
        }
    });

    $(".collapse-bg").click(function() {
        $(".navbar-toggler").removeClass("collapsed");
        $(".navbar-collapse").removeClass("show");
        $(".collapse-bg").css({
            display: 'none'
        });
    });

});