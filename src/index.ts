import { Calculator } from "./calculator";

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_sub = calc.subtract(2, 3);
console.log(`result_sub = ${result_sub}`);

const result_mult = calc.multiply(2, 3);
console.log(`result_mult = ${result_mult}`);

const result_div = calc.divide(2, 3);
console.log(`result_div = ${result_div}`);
