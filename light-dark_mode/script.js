const htmlElem = document.querySelector('html');
const toggleThemeBtn = document.getElementById('switch');

// toggleThemeBtn.onchange = () => {
//     toggleThemeBtn.checked
//         ? htmlElem.setAttribute('data-theme', 'dark')
//         : htmlElem.removeAttribute('data-theme');
// };

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};

toggleThemeBtn.addEventListener('change', function () {
    trans();
    this.checked
        ? htmlElem.setAttribute('data-theme', 'dark')
        : htmlElem.removeAttribute('data-theme');
});
