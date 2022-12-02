import { readFileSync } from 'fs';

// Part 1
const input = readFileSync('./day1/input.txt');

const inputStr = input.toString('utf-8');

const elves = inputStr.split('\n\n');

const calorieCount = elves.map((arr) =>
  arr.split('\n').reduce((prev, curr) => prev + parseInt(curr, 10), 0)
);

calorieCount.sort((a, b) => a - b);

const sorted = calorieCount.reverse().filter((val) => !Number.isNaN(val));

console.log(`Part 1: ${sorted[0]}`);

// Part 2
const topThree = sorted.slice(0, 3).reduce((prev, curr) => prev + curr, 0);
console.log(`Part 2: ${topThree}`);
