(() => {
  const Selectors = {
    ListItemPressables: '.links-list__item > a, .links-list__item > button',
  };

  document.querySelectorAll(Selectors.ListItemPressables).forEach(el => {
    el.addEventListener('mouseenter', randomizeLinksListItemBoxShadow);
    el.addEventListener('mouseleave', resetLinksListItemBoxShadow);
    el.addEventListener('touchstart', randomizeLinksListItemBoxShadow);
    el.addEventListener('touchend', resetLinksListItemBoxShadow);
  });

  MicroModal.init();

  // Functions

  function randomizeLinksListItemBoxShadow(event) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;

    event.target.style.boxShadow = `${randomColor} 10px 10px 0px 0px`;
  }

  function resetLinksListItemBoxShadow(event) {
    event.target.style.boxShadow = `var(--c-overlay) 8px 8px 0px 0px`;
  }
})();
