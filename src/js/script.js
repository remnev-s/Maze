const list = document.querySelectorAll('.tabs-list');
const linkMore = document.querySelector('.footer__link-more');
const cart = document.querySelector('.cart');

list.forEach((item) => {
  item.addEventListener('click', () => {
    list.forEach((evt) => evt.classList.remove('tabs-list-active'));
    item.classList.add('tabs-list-active');
  });
});

linkMore.addEventListener('click', () => {
  cart.classList.add('cart__popup');
});
