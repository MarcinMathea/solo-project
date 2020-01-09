import Buttons from './components/Buttons.js';
import Charts from './components/Charts.js';

const app = {
  init: () => {
    new Buttons();
    new Charts();
  },
};

app.init();