function setHeightMainSection() {
    const headerHeight = document.querySelector('header').clientHeight,
    footerHeight = document.querySelector('footer').clientHeight,
    mainSection = document.querySelector('.main_section');

    mainSection.style.minHeight = (window.innerHeight - (headerHeight + footerHeight)) + 'px';
}

window.addEventListener('onload', setHeightMainSection());
window.onresize = setHeightMainSection;