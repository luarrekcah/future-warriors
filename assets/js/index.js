const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
    if (index % 2 === 0) {
        section.classList.add('dark-section');
    } else {
        section.classList.add('light-section');
    }
});