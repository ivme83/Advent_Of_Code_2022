const fs = require('fs');
const input = fs.readFileSync('./day_06/day_06_input.txt', 'utf8');
const splitInput = input.split('');

const findSequence = (sequenceArray, sequenceLength) => {
    let sequence;
    let index = 0;
    do {
        sequence = sequenceArray.slice(index, index + sequenceLength).filter((value, filterIndex, self) => self.indexOf(value) === filterIndex);
        index++;
    } while (sequence.length <= (sequenceLength - 1));
    return index + (sequenceLength - 1)
}

// Part One
console.log('Part One: ', findSequence(splitInput, 4));

// Part Two
console.log('Part One: ', findSequence(splitInput, 14));