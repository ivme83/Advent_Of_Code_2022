const fs = require('fs')
const input = fs.readFileSync('./day_02/day_02_input.txt', 'utf8')
const rounds = input.split('\r\n');


// Part One
const partOneScores = ['B X', 'C Y', 'A Z', 'A X', 'B Y', 'C Z', 'C X', 'A Y', 'B Z'];
const partOneFinalScore = rounds.map(round => partOneScores.indexOf(round) + 1).reduce((sum, x) => sum + x, 0);
console.log("Part One: ", partOneFinalScore);

// Part Two
const partTwoScores = ['B X', 'C X', 'A X', 'A Y', 'B Y', 'C Y', 'C Z', 'A Z', 'B Z'];
const partTwoFinalScore = rounds.map(round => partTwoScores.indexOf(round) + 1).reduce((sum, x) => sum + x, 0);
console.log("Part Two: ", partTwoFinalScore);
