document.addEventListener(
    'DOMContentLoaded',
    function () {
        updateActiveElementInNavbar();
    },
    false
);

function updateActiveElementInNavbar() {
    var elementToActivate = document.querySelector(`a[href='${window.location.pathname}']`);
    if (elementToActivate) {
        var activeElements = document.getElementsByClassName('active');
        [...activeElements].forEach((element) => {
            element.classList.remove('active');
        });
        elementToActivate.classList.add('active');
    }
}
