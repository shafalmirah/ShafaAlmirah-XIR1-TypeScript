/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores: number[] = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldMedals: number = 0;
let silverMedals: number = 0;
let bronzeMedals: number = 0;
let studentsWithoutMedals: number = 0;
let totalScore: number = 0;

for (const score of scores) {
    totalScore += score;

    if (score >= 95) {
        goldMedals++;
    } else if (score >= 85) {
        silverMedals++;
    } else if (score >= 75) {
        bronzeMedals++;
    } else {
        studentsWithoutMedals++;
    }
}

const averageScore: number = totalScore / scores.length;

console.log(`Gold Medal winners: ${goldMedals}`);
console.log(`Silver Medal winners: ${silverMedals}`);
console.log(`Bronze Medal winners: ${bronzeMedals}`);
console.log(`Students without medals: ${studentsWithoutMedals}`);
console.log(`Average competition score: ${averageScore}`);