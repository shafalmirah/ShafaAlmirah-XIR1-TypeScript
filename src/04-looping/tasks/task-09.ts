/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let studentsWithGradeA: number = 0;
let studentsWithGradeB: number = 0;
let studentsWithGradeC: number = 0;
let studentsWithGradeD: number = 0;
let highestScore: number = students[0].score;
let lowestScore: number = students[0].score;
let totalScore: number = 0;

for (const student of students) {
    totalScore += student.score;

    if (student.score >= 90) {
        studentsWithGradeA++;
    } else if (student.score >= 80) {
        studentsWithGradeB++;
    } else if (student.score >= 70) {
        studentsWithGradeC++;
    } else {
        studentsWithGradeD++;
    }

    if (student.score > highestScore) {
        highestScore = student.score;
    }

    if (student.score < lowestScore) {
        lowestScore = student.score;
    }
}

const averageScore: number = totalScore / students.length;

console.log(`Grade A students: ${studentsWithGradeA}`);
console.log(`Grade B students: ${studentsWithGradeB}`);
console.log(`Grade C students: ${studentsWithGradeC}`);
console.log(`Grade D students: ${studentsWithGradeD}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore}`);