import greet from './greeting.js';
import chalk from 'chalk';

const call = greet('sam');

const redCall = chalk.red(call);

console.log(redCall);
