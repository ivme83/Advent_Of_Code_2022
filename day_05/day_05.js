const fs = require('fs');
const input = fs.readFileSync('./day_05/day_05_input.txt', 'utf8');
const splitInput = input.split('\r\n\r\n').map(x => x.split('\r\n'));

// Part One
let stacks = [];
for (let index = 0; index < splitInput[0].length; index++) {
    stacks[index] = splitInput[0].slice(0, -1).map(stackRow => stackRow[(index * 4) + 1]).filter(x => x !== ' ').reverse();
}
const instructions = splitInput[1].map(x => x.replace('move', '').replace('from', '').replace('to', '').split(' ').filter(x => x !== '').map(x => Number(x)));
instructions.forEach(instruction => {    
    const firstN = stacks[instruction[1] - 1].splice(-1*instruction[0]);
    // Part Two
    // omit reverse()
    stacks[instruction[2] - 1] = [...stacks[instruction[2] - 1], ...firstN.reverse()]
})
const topCrates = stacks.map(x => x.slice(-1)[0]).join('');
console.log('Part One: ', topCrates);