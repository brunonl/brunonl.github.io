$(function () {
    $(".previous").click(function () {

        current_fs = $(this).parent().parent().parent();
        previous_fs = $(this).parent().parent().parent().prev();

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });

        scrollToAnchor(".news__section", 300);
    });

    $(".next").on("click", function () {

        current_fs = $(this).parent().parent().parent();
        next_fs = $(this).parent().parent().parent().next();

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });

        scrollToAnchor(".news__section", 300);
    });

});

function readMore(target) {
    debugger
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = target;

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Ler mais...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Ler menos...";
        moreText.style.display = "inline";
    }
}

function scrollToAnchor(item, speed) {
    var item = $(item);
    $('html,body').animate({ scrollTop: item.offset().top - 90 }, speed);
} 