// console.log('App working: open app/index.js to start exploring ES6');
import * as math from './math';
import $ from 'jquery';

const {num1, num2} = math;

console.log(`add ${num1} and ${num2}, you will get ${math.add(num1,num2)}`);
console.log(`subtract ${num1} and ${num2}, you will get ${math.subtract(num1,num2)}`);
console.log(`divide ${num1} and ${num2}, you will get ${math.divide(num1,num2)}`);
console.log(`multiply ${num1} and ${num2}, you will get ${math.multiply(num1,num2)}`);
console.log(math);

$('#root').append('<h1>I am Brian</h1>');