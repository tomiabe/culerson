const menu = document.querySelector('.mobile-nav');

menu?.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.open) {
    event.preventDefault();
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});
