/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedAssignments: number = 0;
let studentsWhoDidNotSubmit: number = 0;
let studentsWhoPassed: number = 0;
let studentsWhoMustRevise: number = 0;
let totalScore: number = 0;
const namesWhoDidNotSubmit: string[] = [];
const namesWhoMustRevise: string[] = [];

for (const submission of submissions) {
    totalScore += submission.score;

    if (!submission.submitted) {
        studentsWhoDidNotSubmit++;
        namesWhoDidNotSubmit.push(submission.student);
    } else {
        submittedAssignments++;

        if (submission.score >= 75) {
            studentsWhoPassed++;
        } else {
            studentsWhoMustRevise++;
            namesWhoMustRevise.push(submission.student);
        }
    }
}

const classAverageScore: number = totalScore / submissions.length;

console.log(`Students who submitted: ${submittedAssignments}`);
console.log(`Students who did not submit: ${studentsWhoDidNotSubmit}`);
console.log(`Students who passed: ${studentsWhoPassed}`);
console.log(`Students who must revise: ${studentsWhoMustRevise}`);
console.log(`Names of students who did not submit: ${namesWhoDidNotSubmit.join(", ")}`);
console.log(`Names of students who must revise: ${namesWhoMustRevise.join(", ")}`);
console.log(`Class average score: ${classAverageScore}`);