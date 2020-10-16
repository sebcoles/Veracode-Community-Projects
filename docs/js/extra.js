let stats = document.querySelectorAll('.stats');
for (let i = 1; i < stats.length; i++) {
    let h = imgs[i].naturalHeight;
    let w = imgs[i].naturalWidth;
    let pe = imgs[i].previousElementSibling;
    if (!pe) {
        continue;
    }
    if (pe.nodeName != "IMG") {
        continue;
    }
    let sh = pe.naturalHeight;
    let sw = pe.naturalWidth;
    if (sw != w || sh != h) {
        continue;
    }
    if (imgs[i].carousel) {
        continue;
    }
    if (!pe.carousel) {
        pe.carousel = [pe];
        setCarousel(pe);
    }
    pe.carousel.push(imgs[i]);
    imgs[i].carousel = pe.carousel;
    setCarouselEvents(imgs[i]);
    // set parent size
    pe.parentElement.style.minWidth = "calc(" + sw + "px + 2em)";
    pe.parentElement.style.minHeight = "calc(" + sh + "px + 2em)";
}