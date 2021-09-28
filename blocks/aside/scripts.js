const init = (element) => {
    const bg = element.querySelector(':scope > div:first-of-type > div');
    bg.classList.add('background');
    const bgImg = bg.querySelector(':scope img');
    if (!bgImg) {
        bg.style.display = 'none';
        const bgColor = bg.textContent;
        element.style.background = bgColor;
    }
    const content = element.querySelector(':scope > div:last-of-type');
    content.classList.add('container');
    content.querySelector(':scope > div:first-of-type').classList.add('text');
    content.querySelector(':scope > div:last-of-type').classList.add('image');

    const cta = content.querySelector(':scope > div:first-of-type a');
    const ctaType = element.classList.contains('dark') ? 'over-background' : 'cta';
    const ctaStyleCheck = cta.textContent.includes(' -');
    if (ctaStyleCheck) {
        const ctaStringIndex = cta.textContent.lastIndexOf('-');
        const ctaStyle = cta.textContent.slice(ctaStringIndex);
        const ctaUpdatedText = cta.textContent.replace(` ${ctaStyle}`, '');
        cta.innerHTML = ctaUpdatedText;
        cta.classList.add('button', ctaType);
        if (ctaType !== 'over-background' ) {
            cta.classList.add(`button${ctaStyle}`, ctaType);
        }
    } else {
        cta.classList.add('button', ctaType);
    }
};

export default init;
