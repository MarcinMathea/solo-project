class Buttons {
  constructor() {
    this.burgerButton();
    console.log('buttons');
  }
  burgerButton() {
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
      const nav = document.querySelector('.nav-menu');

      nav.classList.toggle('none-display');
    });
  }
}
const app = {
  init: () => {
    new Buttons();
  },
};

app.init();