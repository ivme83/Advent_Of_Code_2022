const fs = require('fs')
const input = fs.readFileSync('./day_04/day_04_input.txt', 'utf8')
const splitInput = input.split('\r\n');

// Part One
const assignmentPairs = splitInput
    .map(assignmentPair => assignmentPair.split(',')
        .map(assignment => assignment.split('-')
            .map(section => Number(section))))
    .filter(assignmentPair => {
        return (assignmentPair[0][0] >= assignmentPair[1][0] && assignmentPair[0][1] <= assignmentPair[1][1])
            || (assignmentPair[1][0] >= assignmentPair[0][0] && assignmentPair[1][1] <= assignmentPair[0][1])
    })

console.log('Part One: ', assignmentPairs.length);

// Part Two
const assignmentPairs2 = splitInput
    .map(assignmentPair => assignmentPair.split(',')
        .map(assignment => assignment.split('-')
            .map(section => Number(section))))
    .filter(assignmentPair => (assignmentPair[0][0] < assignmentPair[1][0] && assignmentPair[0][1] < assignmentPair[1][0])
        || (assignmentPair[0][0] > assignmentPair[1][1] && assignmentPair[0][1] > assignmentPair[1][1]))

console.log('Part Two: ', splitInput.length - assignmentPairs2.length);