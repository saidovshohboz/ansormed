let elSiteHeader = document.querySelector('.site-header');
let elSiteHeaderToggleButton = elSiteHeader.querySelector('.site-header-toggle-button');

if (elSiteHeaderToggleButton) {
  elSiteHeaderToggleButton.addEventListener('click', () => {
    elSiteHeader.classList.toggle('site-header-open')
  });
}