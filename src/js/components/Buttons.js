class Buttons {
    constructor() {
      this.burgerButton();
      this.buttonChart();
      console.log('!constructed: buttons');
    }
    burgerButton() {
      const burger = document.querySelector('.burger');
  
      burger.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('none-display');
        document.querySelector('.profiles').classList.toggle('none-display');
      });
    }
    buttonChart() {
      const chart = document.querySelectorAll('.btn-chart');
  
      for (let btn of chart) {
        btn.addEventListener('click', () => {
          btn.classList.toggle('btn-chart-active');
        });
      }
    }
  }  

export default Buttons;