const menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = toggleMenu;

function toggleMenu() {
   menuBtn.classList.toggle('text-2xl');
   menuBtn.innerHTML = menuBtn.innerHTML === '×'
      ? 'Menu' : '&#215';

   document.querySelector('.nav-links').classList.toggle('hidden');
}