const hambourger = document.querySelector('.hambourger');

hambourger.addEventListener('click', function (e) {
  e.target.closest('.hambourger').classList.toggle('hambourger--active');
  e.target.closest('.menu').querySelector('.menu__list').classList.toggle('menu__list--active');
});