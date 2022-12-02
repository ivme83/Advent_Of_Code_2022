const fs = require('fs')
const input = fs.readFileSync('./day_01/day_01_input.txt', 'utf8')

// Part One
const foodPacks = input
    .split('\r\n\r\n')
    .map(foodPack => foodPack.split('\r\n').reduce((sum, x) => sum + Number(x), 0));

const maxFoodPack = Math.max(...foodPacks);

console.log("Part One: ", maxFoodPack);

// Part Two
const topThree = foodPacks.sort((a, b) => b - a).slice(0, 3).reduce((sum, x) => sum + x);
console.log("Part Two: ", topThree);
