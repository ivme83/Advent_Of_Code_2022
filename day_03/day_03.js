const fs = require('fs')
const input = fs.readFileSync('./day_03/day_03_input.txt', 'utf8')
const rucksacks = input.split('\r\n');

// Part One
const prioritySum = rucksacks
    .map(rucksack => [rucksack.slice(0, rucksack.length / 2).split(''), rucksack.slice(rucksack.length / 2).split('')])
    .map(compartments => compartments[0]
        .filter(value => compartments[1].includes(value))[0]
        .charCodeAt())
    .map(item => item > 90 ? item - 96 : item - 38)
    .reduce((sum, x) => sum + x, 0);

console.log("Part One: ", prioritySum);

// Part Two
const elfBadgeSum = Array.from({length: rucksacks.length / 3}, () => rucksacks.splice(0, 3))
    .map(elfGroup => elfGroup.map(elf => elf.split('')))
    .map(elfGroup => elfGroup[0].filter(value => elfGroup[1].includes(value)).filter(value => elfGroup[2].includes(value))[0].charCodeAt(0))
    .map(badge => badge > 90 ? badge - 96 : badge - 38)
    .reduce((sum, x) => sum + x, 0);
;
console.log('Part Two: ', elfBadgeSum);