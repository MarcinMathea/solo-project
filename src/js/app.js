//BUTTONS
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
//CHART
class Charts {
  constructor() {
    this.earnChart();
    console.log('!constructed: chart');
  }
  earnChart() {
    const earnChartSelector = document.querySelector('#earnChart').getContext('2d');

    const eChart = new Chart(earnChartSelector, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
          label: 'Signups',
          backgroundColor: 'rgb(100,170,190)',
          borderColor: 'rgb(100,170,190)',
          data: [250, 100, 200, 300, 200, 600, 100]
        },
        {
          label: 'FTD',
          backgroundColor: 'rgb(255, 123, 0)',
          borderColor: 'rgb(255, 123, 0)',
          data: [350, 200, 400, 100, 400, 300, 300]
        },
        {
          label: 'Earned',
          backgroundColor: 'rgb(50,180,10)',
          borderColor: 'rgb(50,180,10)',
          data: [0, 100, 350, 300, 400, 400, 200]
        },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }]
        },
        legend: {
          display: false,
        }
      },
    });
    return eChart;
  }
}

//APP
const app = {
  init: () => {
    new Buttons();
    new Charts();
  },
};

app.init();