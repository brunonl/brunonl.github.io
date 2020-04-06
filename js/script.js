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

function scrollToAnchor(item) {
	var item = $(item);
	$('html,body').animate({ scrollTop: item.offset().top }, 'slow');
} 