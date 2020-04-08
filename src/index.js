const { generateLogs } = require('../utils/');

const intervalTime = 5;
const greetings = ['Buenos días', 'good morning', 'Bonjour', 'Buon Giorno', 'Guten Tag', 'Bon dia', 'Bom día'];
const dir = './logs';
let counter = 1;

const interval = setInterval(async () => {
  try {
    res = await generateLogs(dir, greetings);
    console.log(`${counter} ${res}`);

    counter === intervalTime ? clearInterval(interval) : counter++;
  } catch (error) {
    console.log("catch ", error);
  }
}, 1000);
