document.addEventListener(
    'DOMContentLoaded',
    function () {
        updateActiveElementInNavbar();
    },
    false
);

function updateActiveElementInNavbar() {
    var activeElement = document.querySelector(`a[href='${window.location.pathname}']`);
    if (activeElement) {
        activeElement.classList.add('active');
    }
}
