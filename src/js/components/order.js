const order = () => {
  const orderBtn = document.querySelector('.cart__order-btn');
  const order = document.querySelector('.order');

  if (order) {
    orderBtn.addEventListener('click', () => {
      order.classList.add('order--active');
    });
  }
}

order();
