const toggleMenu = document.getElementById('toggleMenu');
const dropMenu = document.querySelector('.dropMenu');

toggleMenu.addEventListener ('click', () => {
  if (dropMenu.style.display == 'none') {
    toggleMenu.textContent = 'close';
    dropMenu.style.display = 'block';
  } else {
    toggleMenu.textContent = "menu";
    dropMenu.style.display = 'none';
  }
});
